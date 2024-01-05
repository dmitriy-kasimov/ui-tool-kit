import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '../index';
import { decoratorBackground } from '../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

const meta: Meta<typeof ProgressBar> = {
    title: 'components/ProgressBar',
    component: ProgressBar,
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
type Story = StoryObj<typeof ProgressBar>;

export const ProgressBarDefault: Story = {
    args: {
      max: 100,
      value: 30
    },
};