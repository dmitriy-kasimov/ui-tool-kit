import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../index';
import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Text } from 'ui/components/shared/Text';

const meta: Meta<typeof Button> = {
    title: 'components/controls/Button',
    component: Button,
    decorators: [
      (Story) => (
        decoratorBackground(Story)
      )
    ],
    parameters: {
        layout: 'fullscreen',
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

export const VariantPrimary: Story = {
  args: {
      children: (<Text>Click on me!</Text>),
      variant: 'primary'
  },
};

export const VariantOutline: Story = {
  args: {
      children: (<Text>Click on me!</Text>),
      variant: 'outline'
  },
};

export const VariantClear: Story = {
  args: {
      children: (<Text>Click on me!</Text>),
      variant: 'clear'
  },
};

export const VariantAccept: Story = {
  args: {
      children: (<Text>Click on me!</Text>),
      variant: 'accept'
  },
};

export const VariantCancel: Story = {
  args: {
      children: (<Text>Click on me!</Text>),
      variant: 'cancel'
  },
};