import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { decoratorBackground } from '../../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { ListBox } from './ListBox';
import { HStack } from 'ui/components/shared/Stack';
import { Skeleton } from 'ui/components/shared/Skeleton';
import { Text } from 'ui/components/shared/Text';
import { ListBoxItem } from '../types/ListBoxProps';

const meta: Meta<typeof ListBox> = {
    title: 'components/controls/ListBox',
    component: ListBox,
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
type Story = StoryObj<typeof ListBox>;


const listItems: ListBoxItem<string>[] = [
    { content: (<HStack gap="s"><Skeleton height={30} width={30} border='50%'/> <Text>M1RoN</Text></HStack>), value: 'M1RoN' },
    { content: (<HStack gap="s"><Skeleton height={30} width={30} border='50%'/> <Text>Alan_Masti</Text></HStack>), value: 'Alan_Masti' },
    { content: (<HStack gap="s"><Skeleton height={30} width={30} border='50%'/> <Text>Le[G]ion_kirov_43rus</Text></HStack>), value: 'Le[G]ion_kirov_43rus', disabled: true },
    { content: (<HStack gap="s"><Skeleton height={30} width={30} border='50%'/> <Text>LaRGo</Text></HStack>), value: 'LaRGo' },
    { content: (<HStack gap="s"><Skeleton height={30} width={30} border='50%'/> <Text>KonfeTK@</Text></HStack>), value: 'KonfeTK@' },
];

export const Normal: Story = {
    args: {
        value: 'M1RoN',
        items: listItems,
    },
};

export const DisabledItem: Story = {
    args: {
        value: 'M1RoN',
        items: listItems,
    },
};

export const topLeft: Story = {
    args: {
        direction: 'top left',
        value: 'M1RoN',
        items: listItems,
    },
};

export const topRight: Story = {
    args: {
        direction: 'top right',
        value: 'M1RoN',
        items: listItems,
    },
};

export const bottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: 'M1RoN',
        items: listItems,
    },
};

export const bottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: 'M1RoN',
        items: listItems,
    },
};
