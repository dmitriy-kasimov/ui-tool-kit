import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../index';
import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Text } from 'ui/components/shared/Text';
import { validationStatus } from 'ui/components/controls';
import { ButtonTheme } from '../types/ButtonProps';

const meta: Meta<typeof Button> = {
    title: 'components/controls/Button',
    component: Button,
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
type Story = StoryObj<typeof Button>;

export const Normal: Story = {
    args: {
        children: (<Text>Button active</Text>),
    },
};

export const Disabled: Story = {
  args: {
      children: (<Text>Button disabled</Text>),
      disabled: true
  },
};

export const FullWidth: Story = {
  args: {
      children: (<Text>Button fullllll width!</Text>),
      fullWidth: true
  },
};

export const Square: Story = {
  args: {
      children: (<Text>no paddings</Text>),
      square: true
  },
};

export const ThemePrimary: Story = {
  args: {
      children: (<Text>Click on me!</Text>),
      theme: ButtonTheme.PRIMARY
  },
};

export const ThemeOutline: Story = {
  args: {
      children: (<Text>Click on me!</Text>),
      theme: ButtonTheme.OUTLINE
  },
};

export const ThemeClear: Story = {
  args: {
      children: (<Text>Click on me!</Text>),
      theme: ButtonTheme.CLEAR
  },
};

export const ThemeAccept: Story = {
  args: {
      children: (<Text>Click on me!</Text>),
      theme: ButtonTheme.ACCEPT
  },
};

export const ThemeCancel: Story = {
  args: {
      children: (<Text>Click on me!</Text>),
      theme: ButtonTheme.CANCEL
  },
};