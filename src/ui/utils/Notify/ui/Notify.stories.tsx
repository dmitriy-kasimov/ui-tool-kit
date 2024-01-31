import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Notify, NotifyType } from '../index';
import { Text } from 'ui/components/shared/Text';

const meta: Meta<typeof Notify> = {
    title: 'utils/Notify',
    component: Notify,
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
type Story = StoryObj<typeof Notify>;

export const NotifyWarning: Story = {
    args: {
        isOpen: true,
        title: 'Внимание!',
        onClose: () => {},
        type: NotifyType.WARNING,
        children: (
            <Text>Срок действия VIP-аккаунта скоро истечёт!</Text>
        )
    },
};

export const NotifyError: Story = {
    args: {
        isOpen: true,
        title: 'Внимание!',
        onClose: () => {},
        type: NotifyType.ERROR,
        children: (
            <Text>Срок действия VIP-аккаунта истёк!</Text>
        )
    },
};

export const NotifySuccessfully: Story = {
    args: {
        isOpen: true,
        title: 'Внимание!',
        onClose: () => {},
        type: NotifyType.SUCCESSFULLY,
        children: (
            <Text>Вы успешно приобрели VIP-аккаунт!</Text>
        )
    },
};

export const NotifyInfo: Story = {
    args: {
        isOpen: true,
        title: 'Внимание!',
        onClose: () => {},
        type: NotifyType.INFO,
        children: (
            <Text>Вам перевели 1000$!</Text>
        )
    },
};

export const NotifyEmptyText: Story = {
    args: {
        isOpen: true,
        title: 'Внимание!',
        onClose: () => {},
        type: NotifyType.INFO,
        children: (
            <Text> </Text>
        )
    },
};