import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from './../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { NavBar } from '../index';

const meta: Meta<typeof NavBar> = {
    title: 'widgets/NavBar',
    component: NavBar,
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
type Story = StoryObj<typeof NavBar>;

export const NavBarDefault: Story = {
    args: {
     links: [
        {name: 'Link 1', onClick(){}},
        {name: 'Link 2', onClick(){}},
        {name: 'Link 3', onClick(){}},
     ]
    },
};