import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Link } from '../index';
import { Text, textSize } from 'ui/components/shared/Text';

const meta: Meta<typeof Link> = {
    title: 'components/Link',
    component: Link,
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
type Story = StoryObj<typeof Link>;

export const LinkDefault: Story = {
    args: {
      children: <Text size={textSize.IMPORTANT}>Link 1</Text>,
      onClick: () => {},
    },
};

export const LinkDisabled: Story = {
  args: {
    children: <Text size={textSize.IMPORTANT}>Link 1</Text>,
    onClick: () => {},
    disabled: true
  },
};