import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '../index';
import { decoratorBackground } from '../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

const meta: Meta<typeof ProgressBar> = {
    title: 'widgets/information/ProgressBar',
    component: ProgressBar,
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
type Story = StoryObj<typeof ProgressBar>;

export const HorizontalF: Story = {
    args: {
      max: 100,
      value: 30
    },
};

export const HorizontalD: Story = {
  args: {
    max: 100,
    value: 48
  },
};

export const HorizontalC: Story = {
  args: {
    max: 100,
    value: 55
  },
};

export const HorizontalB: Story = {
  args: {
    max: 100,
    value: 80
  },
};

export const HorizontalA: Story = {
  args: {
    max: 100,
    value: 100
  },
};

export const VerticalF: Story = {
  args: {
    max: 100,
    value: 30,
    type: 'vertical'
  },
};

export const VerticalD: Story = {
  args: {
    max: 100,
    value: 48,
    type: 'vertical'
  },
};

export const VerticalC: Story = {
  args: {
    max: 100,
    value: 55,
    type: 'vertical'
  },
};

export const VerticalB: Story = {
  args: {
    max: 100,
    value: 80,
    type: 'vertical'
  },
};

export const VerticalA: Story = {
  args: {
    max: 100,
    value: 100,
    type: 'vertical'
  },
};