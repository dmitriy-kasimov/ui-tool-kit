import type { Meta, StoryObj } from '@storybook/react';

import { TextFieldPassword } from '../index';
import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

const meta: Meta<typeof TextFieldPassword> = {
    title: 'components/controls/TextFieldPassword',
    component: TextFieldPassword,
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
type Story = StoryObj<typeof TextFieldPassword>;

export const Default: Story = {
    args: {
        label: 'Describe your problem',
        placeholder: 'Placeholder',
    },
};