import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
    decorators: [
        (Story) => (
            <div style={{background:'black'}}><Story /></div>
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
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
    args: {
        direction: 'row',
        children: (
            <div>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </div>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const RowGap4: Story = {
    args: {
        direction: 'row',
        gap: '4',
        children: (
            <div>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </div>
        ),
    },
};

export const RowGap8: Story = {
    args: {
        direction: 'row',
        gap: '8',
        children: (
            <div>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </div>
        ),
    },
};

export const RowGap16: Story = {
    args: {
        direction: 'row',
        gap: '16',
        children: (
            <div style={{ minWidth: '200px' }}>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </div>
        ),
    },
};

export const RowGap32: Story = {
    args: {
        direction: 'row',
        gap: '32',
        children: (
            <div>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </div>
        ),
    },
};

export const ColumnGap4: Story = {
    args: {
        direction: 'column',
        gap: '4',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const ColumnGap8: Story = {
    args: {
        direction: 'column',
        gap: '8',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const ColumnGap16: Story = {
    args: {
        direction: 'column',
        gap: '16',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const ColumnGap32: Story = {
    args: {
        direction: 'column',
        gap: '32',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};
