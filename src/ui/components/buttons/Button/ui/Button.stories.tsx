import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button, buttonVariant } from '../index';
import { decoratorBackground } from '../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Text } from 'ui/components/text/Text';

const meta: Meta<typeof Button> = {
    title: 'components/Button',
    component: Button,
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
type Story = StoryObj<typeof Button>;

export const ButtonPrimary: Story = {
    args: {
        variant: buttonVariant.PRIMARY,
        children: (<Text>PRIMARY button</Text>),
        
    },
};

export const ButtonOutline: Story = {
  args: {
      variant: buttonVariant.OUTLINE,
      children: (<Text>OUTLINE button</Text>),
      
  },
};