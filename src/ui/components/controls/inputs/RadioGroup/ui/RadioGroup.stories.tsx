import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { RadioGroup } from '../index';
import { validationStatus } from 'ui/components/controls';

const meta: Meta<typeof RadioGroup> = {
    title: 'components/RadioGroup',
    component: RadioGroup,
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
type Story = StoryObj<typeof RadioGroup>;

export const RadioGroupDefault: Story = {
    args: {
        name:'gender',
        options: [
            {value: 'male',description: 'Муж'},
            {value: 'female',description: 'Жен'},
            {value: 'hz',description: 'pidor', disabled:true},
        ],
    },
};

export const RadioGroupWarning: Story = {
    args: {
        name:'gender',
        valid: validationStatus.WARNING,
        options: [
            {value: 'male',description: 'Муж'},
            {value: 'female',description: 'Жен'},
            {value: 'hz',description: 'pidor', disabled:true},
        ],
    },
};

export const RadioGroupError: Story = {
    args: {
        name:'gender',
        valid: validationStatus.ERROR,
        options: [
            {value: 'male',description: 'Муж'},
            {value: 'female',description: 'Жен'},
            {value: 'hz',description: 'pidor', disabled:true},
        ],
    },
};

export const RadioGroupSuccessfully: Story = {
    args: {
        name:'gender',
        valid: validationStatus.SUCCESSFULLY,
        options: [
            {value: 'male',description: 'Муж'},
            {value: 'female',description: 'Жен'},
            {value: 'hz',description: 'pidor', disabled:true},
        ],
    },
};

export const RadioGroupDisabled: Story = {
    args: {
        name:'gender',
        options: [
            {value: 'male',description: 'Муж'},
            {value: 'female',description: 'Жен'},
            {value: 'hz',description: 'pidor', disabled:true},
        ],
        disabled: true
    },
};