import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../index';
import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Text } from 'ui/components/shared/text/Text';
import { validationStatus } from 'ui/components/controls';

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
        children: (<Text>Button active</Text>),
        
    },
};

export const ButtonValidationError: Story = {
  args: {
      children: (<Text>Button active</Text>),
      valid: validationStatus.ERROR
  },
};

export const ButtonValidationWarning: Story = {
  args: {
      children: (<Text>Button active</Text>),
      valid: validationStatus.WARNING
  },
};

export const ButtonValidationSuccessfully: Story = {
  args: {
      children: (<Text>Button active</Text>),
      valid: validationStatus.SUCCESSFULLY
  },
};
export const ButtonDisabled: Story = {
  args: {
      children: (<Text>Button disabled</Text>),
      disabled: true
  },
};