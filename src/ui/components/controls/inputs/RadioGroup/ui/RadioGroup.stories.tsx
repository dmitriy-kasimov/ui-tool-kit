import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { RadioGroup } from '../index';

const meta: Meta<typeof RadioGroup> = {
    title: 'components/controls/RadioGroup',
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