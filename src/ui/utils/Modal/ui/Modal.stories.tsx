import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Modal } from '../index';
import { Text } from 'ui/components/shared/Text';

const meta: Meta<typeof Modal> = {
    title: 'utils/modal/Modal',
    component: Modal,
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
type Story = StoryObj<typeof Modal>;

export const ModalOpen: Story = {
    args: {
       isOpen:true,
       children: <Text  color='info'>The modal window was successfully started!</Text>
    },
};