import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Link } from '../index';
import { Text } from 'ui/components/shared/Text';

const meta: Meta<typeof Link> = {
    title: 'components/controls/Link',
    component: Link,
    decorators: [
        (Story) => (
          decoratorBackground(Story)
        ),
      ],
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const LinkDefault: Story = {
    args: {
      children: <Text size='important'>Link 1</Text>,
    },
};

export const LinkDisabled: Story = {
  args: {
    children: <Text size='important'>Link 1</Text>,
    disabled: true
  },
};