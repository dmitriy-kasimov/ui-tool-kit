import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Slider } from '../index';
import { validationStatus } from 'ui/components/controls';

const meta: Meta<typeof Slider> = {
    title: 'components/controls/Slider',
    component: Slider,
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
type Story = StoryObj<typeof Slider>;

export const SliderDefault: Story = {
    args: {
        value: 5,
        onChange: () => {},
        min: 0,
        max: 10,
        step: 1
    },
};

export const SliderDisabled: Story = {
    args: {
        disabled: true,
        value: 5,
        onChange: () => {},
        min: 0,
        max: 10,
        step: 1
    },
};

export const SliderValidationError: Story = {
    args: {
        value: 5,
        onChange: () => {},
        min: 0,
        max: 10,
        step: 1,
        valid: validationStatus.ERROR
    },
};

export const SliderValidationWarning: Story = {
    args: {
        value: 5,
        onChange: () => {},
        min: 0,
        max: 10,
        step: 1,
        valid: validationStatus.WARNING
    },
};

export const SliderValidationSuccessfully: Story = {
    args: {
        value: 5,
        onChange: () => {},
        min: 0,
        max: 10,
        step: 1,
        valid: validationStatus.SUCCESSFULLY
    },
};
