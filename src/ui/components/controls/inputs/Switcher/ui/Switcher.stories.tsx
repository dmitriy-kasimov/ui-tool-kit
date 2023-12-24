import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Switcher } from '../index';
import { validationStatus } from 'ui/components/controls';

const meta: Meta<typeof Switcher> = {
    title: 'components/Switcher',
    component: Switcher,
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
type Story = StoryObj<typeof Switcher>;

export const SwitcherOff: Story = {
    args: {
        id:'test',
        value: false,
        onChange: () => {}
    },
};

export const SwitcherOn: Story = {
    args: {
        id:'test',
        value: true,
        onChange: () => {}
    },
};

export const SwitcherDisabled: Story = {
    args: {
        id:'test',
        value: true,
        onChange: () => {},
        disabled: true
    },
};

export const SwitcherValidationError: Story = {
    args: {
        id:'test',
        value: true,
        onChange: () => {},
        valid: validationStatus.ERROR
    },
};

export const SwitcherValidationWarning: Story = {
    args: {
        id:'test',
        value: true,
        onChange: () => {},
        valid: validationStatus.WARNING
    },
};

export const SwitcherValidationSuccessfully: Story = {
    args: {
        id:'test',
        value: true,
        onChange: () => {},
        valid: validationStatus.SUCCESSFULLY
    },
};