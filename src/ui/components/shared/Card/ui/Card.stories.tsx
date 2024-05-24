import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { decoratorBackground } from '../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Skeleton } from 'ui/components/shared/Skeleton';

const meta: Meta<typeof Card> = {
    title: 'widgets/Card',
    component: Card,
    decorators: [
      (Story) => (
        decoratorBackground(Story)
      )
    ],
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Card>;

const children = (
    <Skeleton width={300} height={300}/>
)

export const VariantNormal: Story = {
    args: {
        variant: 'normal',
        children,
    },
};

export const VariantOutlined: Story = {
    args: {
        variant: 'outlined',
        children,
    },
};

export const BorderNormal: Story = {
    args: {
        border: 'normal',
        children,
    },
};

export const BorderRound: Story = {
    args: {
        border: 'round',
        children,
    },
};

export const WithoutPaddings: Story = {
    args: {
        children,
    },
};

export const PaddingXL: Story = {
    args: {
        contentMargin: 'xl',
        children,
    },
};

export const Overflowed: Story = {
    args: {
        maxHeight: '200px',
        maxWidth: '200px',
        children,
    },
};