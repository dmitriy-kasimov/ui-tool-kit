import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../index';
import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Text } from 'ui/components/shared/text/Text';
import { validationStatus } from 'ui/components/controls';

const meta: Meta<typeof Input> = {
    title: 'components/Input',
    component: Input,
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
type Story = StoryObj<typeof Input>;

export const InputDefault: Story = {
    args: {
        label: 'Ur name',
        limit: 10,
        
    },
};

export const InputValidationError: Story = {
  args: {
      label: 'Ur name',
      limit: 10,
      valid: validationStatus.ERROR
  },
};

export const InputValidationWarning: Story = {
  args: {
      label: 'Ur name',
      limit: 10,
      valid: validationStatus.WARNING
  },
};
export const InputValidationSuccessfully: Story = {
  args: {
      label: 'Ur name',
      limit: 10,
      valid: validationStatus.SUCCESSFULLY
  },
};
export const InputDisabled: Story = {
  args: {
      label: 'Ur name',
      limit: 10,
      disabled: true
  },
};

export const InputMask: Story = {
  args: {
      label: 'Ur pass',
      limit: 32,
      masked: true,
  },
};