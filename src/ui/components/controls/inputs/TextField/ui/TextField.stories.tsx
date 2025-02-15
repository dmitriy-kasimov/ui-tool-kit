import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '../index';
import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import {Skeleton} from "ui/components/shared/Skeleton";

const meta: Meta<typeof TextField> = {
    title: 'components/controls/TextField',
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

export const TextAreaDefault: Story = {
    args: {
        label: 'Describe your problem',
        placeholder: 'Suus',
        addonLeft: (<Skeleton width={32} height={32} border={'50%'}/>),
        addonRight: (<Skeleton width={32} height={32} border={'50%'}/>),
    },
};

export const TextAreaDisabled: Story = {
    args: {
        label: 'Describe your problem',
        disabled: true
    },
};
