import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { UITest3 } from './UITest3';

const meta: Meta<typeof UITest3> = {
    title: 'test/widgets',
    component: UITest3,
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
type Story = StoryObj<typeof UITest3>;

export const InformationAndNavigation: Story = {
    args: {
      
    },
};