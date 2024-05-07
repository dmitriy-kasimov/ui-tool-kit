import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { UITestInteg } from './UITestInteg';

const meta: Meta<typeof UITestInteg> = {
    title: 'test/integration',
    component: UITestInteg,
    decorators: [
        (Story) => (
          decoratorBackground(Story)
        ),
        (Story) => (
            <div style={{width: '100%', height: '1080px'}}>
                <Story />
            </div>
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
type Story = StoryObj<typeof UITestInteg>;

export const ControlsAndShared: Story = {
    args: {
      
    },
};