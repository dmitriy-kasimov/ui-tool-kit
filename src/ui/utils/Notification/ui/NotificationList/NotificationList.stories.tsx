import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';

import { Skeleton } from 'ui/components/shared/Skeleton/Skeleton';
import { VStack } from 'ui/components/shared/Stack';
import { NotificationItemType } from '../../model/types';

const meta: Meta<typeof NotificationList> = {
    title: 'utils/notify/NotificationList',
    component: NotificationList,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof NotificationList>;



export const Empty: Story = {
    args: {
      notifications: []
    },
};

export const WithOnceElem: Story = {
    args: {
      notifications: [
        {title: 'Уведомление 1', id: 'first', body: (
            <VStack gap='8' align='center'>
                <Skeleton width={60} height={60} border='50%'/>
                <Skeleton width={200} height={30}/>
                <Skeleton width={200} height={30}/>
                <Skeleton width={200} height={30}/>
            </VStack>
        )}
      ]
    },
};

export const WithTwiceElem: Story = {
    args: {
      notifications: [
        {title: 'Уведомление 1', id: 'first', body: (
            <VStack gap='8' align='center'>
                <Skeleton width={60} height={60} border='50%'/>
                <Skeleton width={200} height={30}/>
                <Skeleton width={200} height={30}/>
                <Skeleton width={200} height={30}/>
            </VStack>
        )},
        {title: 'Уведомление 2',  id: 'second', body: (
            <VStack gap='8' align='center'>
                <Skeleton width={60} height={60} border='50%'/>
                <Skeleton width={200} height={30}/>
                <Skeleton width={200} height={30}/>
                <Skeleton width={200} height={30}/>
            </VStack>
        )},
      ]
    },
};

/*
        <VStack gap='8' align='center'>
            <Skeleton width={60} height={60} border='50%'/>
            <Skeleton width={200} height={30}/>
            <Skeleton width={200} height={30}/>
            <Skeleton width={200} height={30}/>
        </VStack>
*/