import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { UITest2 } from './UITest2';
import { Text, textColor, textSize } from 'ui/components/shared/Text';

const meta: Meta<typeof UITest2> = {
    title: 'test/components',
    component: UITest2,
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
type Story = StoryObj<typeof UITest2>;

export const ControlsAndShared: Story = {
    args: {
      
    },
};