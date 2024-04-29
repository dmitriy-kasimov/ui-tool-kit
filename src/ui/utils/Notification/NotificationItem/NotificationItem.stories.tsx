import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import {NotificationItem} from './NotificationItem';
import TestIcon from 'styles/assets/icons/success.svg'
import { Skeleton } from 'ui/components/shared/Skeleton/Skeleton';
import { VStack } from 'ui/components/shared/Stack';

const meta: Meta<typeof NotificationItem> = {
    title: 'utils/notify/NotificationItem',
    component: NotificationItem,
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
type Story = StoryObj<typeof NotificationItem>;

export const Normal: Story = {
    args: {
      onClose: () => {},
      item:  {title: 'Title', id: '1', body: (
        <VStack gap='8' align='center'>
            <Skeleton width={60} height={60} border='50%'/>
            <Skeleton width={200} height={30}/>
            <Skeleton width={200} height={30}/>
            <Skeleton width={200} height={30}/>
        </VStack>
      )}
    },
};