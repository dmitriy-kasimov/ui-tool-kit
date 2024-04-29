import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { decoratorBackground } from '../../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Dropdown } from './Dropdown';
import { Button } from 'ui/components/controls/buttons/Button';
import { HStack } from 'ui/components/shared/Stack';
import { Skeleton } from 'ui/components/shared/Skeleton/Skeleton';

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
    { content: (<HStack gap="8"><Skeleton height={30} width={30} border='50%'/> <Skeleton height={30} width={170} /></HStack>), value: '1' },
    { content: (<HStack gap="8"><Skeleton height={30} width={30} border='50%'/> <Skeleton height={30} width={170} /></HStack>), value: '2' },
    { content: (<HStack gap="8"><Skeleton height={30} width={30} border='50%'/> <Skeleton height={30} width={170} /></HStack>), value: '3' },
    { content: (<HStack gap="8"><Skeleton height={30} width={30} border='50%'/> <Skeleton height={30} width={170} /></HStack>), value: '4' },
    { content: (<HStack gap="8"><Skeleton height={30} width={30} border='50%'/> <Skeleton height={30} width={170} /></HStack>), value: '5' },
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
