import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from './../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { UITest } from '../index';

const meta: Meta<typeof UITest> = {
    title: 'utils/UITest',
    component: UITest,
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
type Story = StoryObj<typeof UITest>;

export const UITestDefault: Story = {
    args: {
    },
};
