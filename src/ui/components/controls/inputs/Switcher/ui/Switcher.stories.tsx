
import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Switcher } from '../index';

const meta: Meta<typeof Switcher> = {
    title: 'components/controls/Switcher',
    component: Switcher,
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
type Story = StoryObj<typeof Switcher>;

export const SwitcherOff: Story = {
    args: {
        id:'test',
        value: false,
        onChange: () => {}
    },
};

export const SwitcherOn: Story = {
    args: {
        id:'test',
        value: true,
        onChange: () => {}
    },
};

export const SwitcherDisabled: Story = {
    args: {
        id:'test',
        value: true,
        onChange: () => {},
        disabled: true
    },
};