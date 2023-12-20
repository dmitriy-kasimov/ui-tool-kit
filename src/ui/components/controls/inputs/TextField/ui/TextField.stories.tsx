import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '../index';
import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Text } from 'ui/components/shared/text/Text';
import { validationStatus } from 'ui/components/controls';

const meta: Meta<typeof TextField> = {
    title: 'components/TextField',
    component: TextField,
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
type Story = StoryObj<typeof TextField>;

export const TextFieldDefault: Story = {
    args: {
        label: 'Ur name',
        limit: 10,
        
    },
};

export const TextFieldValidationError: Story = {
  args: {
      label: 'Ur name',
      limit: 10,
      valid: validationStatus.ERROR
  },
};

export const TextFieldValidationWarning: Story = {
  args: {
      label: 'Ur name',
      limit: 10,
      valid: validationStatus.WARNING
  },
};
export const TextFieldValidationSuccessfully: Story = {
  args: {
      label: 'Ur name',
      limit: 10,
      valid: validationStatus.SUCCESSFULLY
  },
};
export const TextFieldDisabled: Story = {
  args: {
      label: 'Ur name',
      limit: 10,
      disabled: true
  },
};

export const TextFieldMask: Story = {
  args: {
      label: 'Ur pass',
      limit: 32,
      masked: true,
  },
};