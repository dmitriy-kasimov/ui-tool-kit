import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Link } from '../index';

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
      name: 'Вкладка 1',
      onClick: () => {},
    },
};

export const LinkActive: Story = {
  args: {
    name: 'Вкладка 1',
    onClick: () => {},
    active: true
  },
};