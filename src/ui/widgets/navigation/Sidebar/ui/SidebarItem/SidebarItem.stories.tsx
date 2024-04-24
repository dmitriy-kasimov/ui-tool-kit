import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { SidebarItem } from './SidebarItem';
import TestIcon from 'styles/assets/icons/success.svg'

const meta: Meta<typeof SidebarItem> = {
    title: 'widgets/information/SidebarItem',
    component: SidebarItem,
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
type Story = StoryObj<typeof SidebarItem>;

export const ModalOpen: Story = {
    args: {
      item:  {Icon: (TestIcon), desciption: 'Link 1', onClick: ()=>{console.log('link 1 has worked!')}}
    },
};