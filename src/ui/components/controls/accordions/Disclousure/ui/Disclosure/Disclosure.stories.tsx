import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Disclosure } from './Disclosure';
import { decoratorBackground } from '../../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Text } from 'ui/components/shared/Text';
import { Skeleton } from 'ui/components/shared/Skeleton/Skeleton';
import { VStack } from 'ui/components/shared/Stack';

const meta: Meta<typeof Disclosure> = {
    title: 'components/controls/Disclosure',
    component: Disclosure,
    decorators: [
      (Story) => (
        decoratorBackground(Story)
      ),
      (Story) => (
        <div style={{width: 600, height: 600}}><Story /></div>
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

export const OneElem: Story = {
    args: {
      items: [
        {
          title: 'The rule #1', 
          description: (<Text>Sometnhing very looooooooooooooooong </Text>),
        },
      ]
    },
};

export const TwoElem: Story = {
  args: {
    items: [
      {
        title: 'The rule #1', 
        description: (<Text>Sometnhing very looooooooooooooooong </Text>),
      },
      {
        title: 'The rule #2 [main rule]',
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

export const TwoElemWithDisable: Story = {
  args: {
    items: [
      {
        title: 'The rule #1', 
        description: (<Text>Sometnhing very looooooooooooooooong </Text>),
      },
      {
        title: 'The rule #2 [main rule]',
        disabled: true,
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