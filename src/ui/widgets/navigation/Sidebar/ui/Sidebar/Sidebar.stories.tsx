import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Sidebar } from './Sidebar';
import TestIcon from 'styles/assets/icons/successfully.svg'

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/information/Sidebar',
    component: Sidebar,
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
type Story = StoryObj<typeof Sidebar>;

export const ModalOpen: Story = {
    args: {
      items: [
        {Icon: (TestIcon), desciption: 'Link 1', onClick: ()=>{console.log('link 1 has worked!')}},
        {Icon: (TestIcon), desciption: 'Link 2', onClick: ()=>{console.log('link 2 has worked!')}},
        {Icon: (TestIcon), desciption: 'Link 3', onClick: ()=>{console.log('link 3 has worked!')}}
      ]
    },
};