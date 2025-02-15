import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Test } from './Test';
import { decoratorBackground } from '../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Skeleton } from 'ui/components/shared/Skeleton';

const meta: Meta<typeof Test> = {
    title: 'widgets/Test',
    component: Test,
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
type Story = StoryObj<typeof Test>;

const children = (
    <Skeleton width={300} height={300}/>
)

export const VariantNormal: Story = {
    args: {

    },
};