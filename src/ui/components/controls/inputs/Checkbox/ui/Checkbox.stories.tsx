import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Checkbox } from '../index';
import { Text } from 'ui/components/shared/Text';
import { validationStatus } from 'ui/components/controls';

const meta: Meta<typeof Checkbox> = {
    title: 'components/Checkbox',
    component: Checkbox,
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
type Story = StoryObj<typeof Checkbox>;

export const CheckboxWithCheck: Story = {
    args: {
        id: 'storybook',
        children: (<Text>Checkbox with the check</Text>),
        checked: true,
        onChange() {
            
        },
    },
};

export const CheckboxWithoutCheck: Story = {
    args: {
        id: 'storybook',
        children: (<Text>Checkbox without the check</Text>),
        checked: false,
        onChange() {
            
        },
    },
};

export const CheckboxWithCheckDisabled: Story = {
    args: {
        id: 'storybook',
        children: (<Text>Checkbox with the check, BUT disabled</Text>),
        checked: true,
        onChange() {
            
        },
        disabled: true
    },
};

export const CheckboxValidWarning: Story = {
    args: {
        id: 'storybook',
        children: (<Text>Максимальные настройки</Text>),
        valid: validationStatus.WARNING,
        checked: true,
        onChange() {
            
        },
    },
};

export const CheckboxValidError: Story = {
    args: {
        id: 'storybook',
        children: (<Text>Check the user-agreement</Text>),
        valid: validationStatus.ERROR,
        onChange() {
            
        },
    },
};

export const CheckboxValidSuccessfully: Story = {
    args: {
        id: 'storybook',
        children: (<Text>Check the user-agreement</Text>),
        valid: validationStatus.SUCCESSFULLY,
        checked: true,
        onChange() {
            
        },
    },
};