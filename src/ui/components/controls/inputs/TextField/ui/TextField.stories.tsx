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

export const Default: Story = {
    args: {
        label: 'Describe your problem',
        placeholder: 'Placeholder',
    },
};

export const WithLeftAddon: Story = {
    args: {
        label: 'Describe your problem',
        placeholder: 'Suus',
        addonLeft: (<Skeleton width={32} height={32} border={'50%'}/>),
    },
};

export const WithRightAddon: Story = {
    args: {
        label: 'Describe your problem',
        placeholder: 'Placeholder',
        addonRight: (<Skeleton width={32} height={32} border={'50%'}/>),
    },
};

export const WithBothAddons: Story = {
    args: {
        label: 'Describe your problem',
        placeholder: 'Placeholder',
        addonLeft: (<Skeleton width={32} height={32} border={'50%'}/>),
        addonRight: (<Skeleton width={32} height={32} border={'50%'}/>),
    },
};

export const Disabled: Story = {
    args: {
        label: 'Describe your problem',
        disabled: true
    },
};
