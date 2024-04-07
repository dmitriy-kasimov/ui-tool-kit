import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Disclosure } from './Disclosure';
import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Text } from 'ui/components/shared/Text';
import { Skeleton } from 'ui/components/shared/Skeleton/Skeleton';
import { VStack } from 'ui/components/shared/Stack';

const meta: Meta<typeof Disclosure> = {
    title: 'widgets/information/Disclosure',
    component: Disclosure,
    decorators: [
      (Story) => (
        decoratorBackground(Story)
      ),
      (Story) => (
        <div style={{}}><Story /></div>
      ),
    ],
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Disclosure>;

export const Normal: Story = {
    args: {
      items: [
        {
          title: (<Text>The rule #1</Text>), 
          description: (<Text>Sometnhing very looooooooooooooooong </Text>),
        },
        {
          title: (<Text>The rule #2 [main rule]</Text>), 
          description: (<VStack gap='8' max>
            <Skeleton width={150} height={40}/>
            <Skeleton width={250} height={30}/>
            <Skeleton width={250} height={30}/>
            <Skeleton width={250} height={250}/>
            <Skeleton width={250} height={30}/>
          </VStack>),
        }
      ]
    },
};