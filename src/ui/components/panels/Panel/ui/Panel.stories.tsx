import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Panel } from '../index';


const meta: Meta<typeof Panel> = {
    title: 'components/Panel',
    component: Panel,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const PanelDefault: Story = {
    args: {
        children: (
          <>
           
          </>
        ),
    },
};