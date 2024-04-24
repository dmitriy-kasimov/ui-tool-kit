import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import AlertItem  from './AlertItem';
import { Text, textColor, textSize } from 'ui/components/shared/Text';
import { VStack } from 'ui/components/shared/Stack';
import { Skeleton } from 'ui/components/shared/Skeleton/Skeleton';

const meta: Meta<typeof AlertItem> = {
    title: 'utils/notify/AlertItem',
    component: AlertItem,
    decorators: [
        (Story) => (
          decoratorBackground(Story)
        )
      ],
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof AlertItem>;

export const Warninng: Story = {
    args: {
       item: {
        title: 'Test',
        body: (
            <VStack max gap='8'>
                <Skeleton width={400} height={16}/>
                <Skeleton width={400} height={16}/>
            </VStack>
        ),
        showTime: 1500,
        type: 'warning'
       }
    },
};
