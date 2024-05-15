import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Text } from 'ui/components/shared/Text';
import { Button } from 'ui/components/controls/buttons/Button';
import { decoratorBackground } from '../../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Skeleton } from 'ui/components/shared/Skeleton/Skeleton';
import { HStack, VStack } from 'ui/components/shared/Stack';

const meta: Meta<typeof Popover> = {
    title: 'components/controls/Popover',
    component: Popover,
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
type Story = StoryObj<typeof Popover>;

const ListItems = [
    { content: (<Skeleton height={70} width={200} />), value: '1' },
    { content: (<HStack gap="s"><Skeleton height={30} width={30} border='50%'/> <Skeleton height={30} width={100} /></HStack>), value: '2' },
    { content: (<HStack gap="s"><Skeleton height={30} width={30} border='50%'/> <Skeleton height={30} width={100} /></HStack>), value: '3' },
    { content: (<HStack gap="s"><Skeleton height={30} width={30} border='50%'/> <Skeleton height={30} width={100} /></HStack>), value: '4' },
    { content: (<HStack gap="s"><Skeleton height={50} width={50} border='50%'/> <Skeleton height={40} width={150} /></HStack>), value: '5' },
];

export const topLeft: Story = {
    args: {
        direction: 'top left',
        trigger: (<Button><Text>Trigger</Text></Button>),
        children: (
            <>
                {ListItems.map(item => (
                    <div key={item.value}>
                        {item.content}
                    </div>
                ))}
            </>
        ),
    },
};

export const topRight: Story = {
    args: {
        direction: 'top right',
        trigger: (<Button><Text>Trigger</Text></Button>),
        children: (
            <>
                {ListItems.map(item => (
                    <div key={item.value}>
                        {item.content}
                    </div>
                ))}
            </>
        ),
    },
};

export const bottomLeft: Story = {
    args: {
        direction: 'bottom left',
        trigger: (<Button><Text>Trigger</Text></Button>),
        children: (
            <>
                {ListItems.map(item => (
                    <div key={item.value}>
                        {item.content}
                    </div>
                ))}
            </>
        ),
    },
};

export const bottomRight: Story = {
    args: {
        direction: 'bottom right',
        trigger: (<Button><Text>Trigger</Text></Button>),
        children: (
            <>
                {ListItems.map(item => (
                    <div key={item.value}>
                        {item.content}
                    </div>
                ))}
            </>
        ),
    },
};
