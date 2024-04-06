import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from 'ui/components/controls/buttons/Button';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
    decorators: [
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

export const Normal: Story = {

    args: {
        trigger: <Button>Open</Button>,
        items: [
            { content: 'first' },
            { content: 'second' },
            { content: 'third' },

        ],
    },
};

export const topLeft: Story = {
    args: {
        trigger: <Button>Open</Button>,
        direction: 'top left',
        items: [
            { content: 'first' },
            { content: 'second' },
            { content: 'third' },

        ],
    },
};
