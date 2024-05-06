import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { decoratorBackground } from '../../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Dropdown } from './Dropdown';
import { Button } from 'ui/components/controls/buttons/Button';
import { HStack } from 'ui/components/shared/Stack';
import { Skeleton } from 'ui/components/shared/Skeleton/Skeleton';
import { Text } from 'ui/components/shared/Text';

const meta: Meta<typeof Dropdown> = {
    title: 'components/controls/Dropdown',
    component: Dropdown,
    decorators: [
        (Story) => (
            decoratorBackground(Story)
        ),
        (Story) => (
            <div style={{ padding: 300 }}><Story /></div>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const ListItems = [
    { content: (<Text>Установить</Text>), value: 'set' },
    { content: (<Text color='info'>Подробнее</Text>), value: 'info' },
    { content: (<Text color='error'>Продать</Text>), value: 'sell' },
];

export const TopLeft: Story = {
    args: {
        trigger: <Button>Open</Button>,
        direction: 'top left',
        items: ListItems,
    },
};

export const TopRight: Story = {
    args: {
        trigger: <Button>Open</Button>,
        direction: 'top right',
        items: ListItems,
    },
};


export const BottomLeft: Story = {
    args: {
        trigger: <Button>Open</Button>,
        direction: 'bottom left',
        items: ListItems,
    },
};


export const BottomRight: Story = {
    args: {
        trigger: <Button>Open</Button>,
        direction: 'bottom right',
        items: ListItems,
    },
};
