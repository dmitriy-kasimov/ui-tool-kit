import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Disclosure } from './Disclosure';
import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

const meta: Meta<typeof Disclosure> = {
    title: 'widgets/Disclosure',
    component: Disclosure,
    decorators: [
      (Story) => (
        decoratorBackground(Story)
      ),
      (Story) => (
        <div style={{}}><Story /></div>
      ),
    ],
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Disclosure>;

export const Normal: Story = {
    args: {
      
    },
};