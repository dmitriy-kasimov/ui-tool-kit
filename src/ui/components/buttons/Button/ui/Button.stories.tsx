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

export const ButtonDefault: Story = {
    args: {
        variant: buttonVariant.PRIMARY,
        children: (<Text>PRIMARY button</Text>),
        
    },
};

export const ButtonDisabled: Story = {
  args: {
      variant: buttonVariant.PRIMARY,
      children: (<Text>PRIMARY button</Text>),
      disabled: true
  },
};