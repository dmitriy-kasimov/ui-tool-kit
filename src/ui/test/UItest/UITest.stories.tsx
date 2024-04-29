import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { UITest } from './UITest';

const meta: Meta<typeof UITest> = {
    title: 'test/utils',
    component: UITest,
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
type Story = StoryObj<typeof UITest>;

export const Utils: Story = {
    args: {
      
    },
};