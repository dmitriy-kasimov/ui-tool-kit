import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import {NotificationItem} from './NotificationItem';
import TestIcon from 'styles/assets/icons/success.svg'
import { Skeleton } from 'ui/components/shared/Skeleton/Skeleton';
import { VStack } from 'ui/components/shared/Stack';
import {Text} from "ui/components/shared/Text";

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

export const WithContent: Story = {
    args: {
      onClose: () => {},
      item:  {title: 'Title', id: '1', body: (
        <VStack gap='s' align='center'>
            <Skeleton width={60} height={60} border='50%'/>
            <Skeleton width={200} height={30}/>
            <Skeleton width={200} height={30}/>
            <Skeleton width={200} height={30}/>
        </VStack>
      )}
    },
};

export const WithText: Story = {
    args: {
        onClose: () => {},
        item:  {title: 'Title', id: '1', body: (
               <Text>You are successfully logged! Date: 19:55 06/18/2024</Text>
        )}
    },
};