import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from './../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { NavBar } from '../index';
import { Link } from 'ui/components/controls/links/Link';
import { Text, textSize } from 'ui/components/shared/Text';

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
     children: (
      <>
        <Link onClick={()=>{}}><Text size={textSize.IMPORTANT}>Link 1</Text></Link>
        <Link onClick={()=>{}}><Text size={textSize.IMPORTANT}>Link 2</Text></Link>
        <Link onClick={()=>{}}><Text size={textSize.IMPORTANT}>Link 3</Text></Link>
      </>
     )
    },
};

export const NavBarWithDisabledLink: Story = {
  args: {
   children: (
    <>
      <Link onClick={()=>{}}><Text size={textSize.IMPORTANT}>Link 1</Text></Link>
      <Link onClick={()=>{}}><Text size={textSize.IMPORTANT}>Link 2</Text></Link>
      <Link onClick={()=>{}} disabled><Text size={textSize.IMPORTANT}>Link 3</Text></Link>
    </>
   )
  },
};