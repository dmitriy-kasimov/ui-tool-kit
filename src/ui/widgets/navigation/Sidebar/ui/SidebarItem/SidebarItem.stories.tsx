import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { SidebarItem } from './SidebarItem';
import TestIcon from 'styles/assets/icons/success.svg'
import { Text } from 'ui/components/shared/Text';
import { Icon } from 'ui/components/shared/Icon';

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

export const InSmallWindow: Story = {
    args: {
      item:  {Icon: <Icon Svg={TestIcon}/>, desciption: <Text>Link 1</Text>, onClick: ()=>{console.log('link 1 has worked!')}}
    },
};