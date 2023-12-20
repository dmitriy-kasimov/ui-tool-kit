import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Select } from '../index';
import { validationStatus } from 'ui/components/controls';

const meta: Meta<typeof Select> = {
    title: 'components/Select',
    component: Select,
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
type Story = StoryObj<typeof Select>;

export const SelectDefault: Story = {
    args: {
        selected: null,
        options: [{title: 'Storybook', value: '1'},{title: 'Loki', value: '2'}],
        placeholder: 'select tool',
        mode: 'rows',
    },
};

export const SelectDisabled: Story = {
    args: {
        selected: null,
        options: [{title: 'Storybook', value: '1'},{title: 'Loki', value: '2'}],
        placeholder: 'select tool',
        mode: 'rows',
        disabled: true
    },
};

export const SelectValidationError: Story = {
    args: {
        valid: validationStatus.ERROR,
        selected: null,
        options: [{title: 'Storybook', value: '1'},{title: 'Loki', value: '2'}],
        placeholder: 'select tool',
        mode: 'rows',
    },
};


export const SelectValidationWarning: Story = {
    args: {
        valid: validationStatus.WARNING,
        selected: null,
        options: [{title: 'Storybook', value: '1'},{title: 'Loki', value: '2'}],
        placeholder: 'select tool',
        mode: 'rows',
    },
};

export const SelectValidationSuccessfully: Story = {
    args: {
        valid: validationStatus.SUCCESSFULLY,
        selected: null,
        options: [{title: 'Storybook', value: '1'},{title: 'Loki', value: '2'}],
        placeholder: 'select tool',
        mode: 'rows',
    },
};
