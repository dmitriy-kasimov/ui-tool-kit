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

export const ProgressBarF: Story = {
    args: {
      max: 100,
      value: 30
    },
};

export const ProgressBarD: Story = {
  args: {
    max: 100,
    value: 48
  },
};

export const ProgressBarC: Story = {
  args: {
    max: 100,
    value: 55
  },
};

export const ProgressBarB: Story = {
  args: {
    max: 100,
    value: 80
  },
};

export const ProgressBarA: Story = {
  args: {
    max: 100,
    value: 100
  },
};