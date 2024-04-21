import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Alert, AlertType } from '../index';
import { Text, textColor, textSize } from 'ui/components/shared/Text';

const meta: Meta<typeof Alert> = {
    title: 'utils/notify/Alert',
    component: Alert,
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
type Story = StoryObj<typeof Alert>;

export const AlertWarninng: Story = {
    args: {
       isOpen: true,
       title: 'Warning',
       onClose: () => {},
       type: 'warning',
       children: (
        <Text>Your pass must be more complex</Text>
       )
    },
};

export const AlertError: Story = {
    args: {
       isOpen: true,
       title: 'Some error',
       onClose: () => {},
       type: 'error',
       children: (
        <Text>Your pass does not meet the requirments!</Text>
       )
    },
};

export const AlertSuccessfully: Story = {
    args: {
       isOpen: true,
       title: 'Registration',
       onClose: () => {},
       type: 'successfully',
       children: (
        <Text>At this moment, you is our client, welcome!</Text>
       )
    },
};

export const AlertInfo: Story = {
    args: {
       isOpen: true,
       title: 'Vehicle',
       onClose: () => {},
       type: 'info',
       children: (
        <Text>The engine this car can be improved!</Text>
       )
    },
};