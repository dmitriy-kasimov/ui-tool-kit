import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from '../index';
import { decoratorBackground } from '../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { LoaderSize } from '../types/LoaderProps';
import { Text } from 'ui/components/shared/Text';

const meta: Meta<typeof Loader> = {
    title: 'components/Loader',
    component: Loader,
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
type Story = StoryObj<typeof Loader>;

export const LoaderSmall: Story = {
    args: {
      size: LoaderSize.SMALL
    },
};
export const LoaderMiddle: Story = {
    args: {
      size: LoaderSize.MIDDLE
    },
};
export const LoaderBig: Story = {
    args: {
      size: LoaderSize.BIG
    },
};

export const LoaderBigWithLabel: Story = {
    args: {
      size: LoaderSize.BIG,
      children: <Text>Loading...</Text>
    },
};