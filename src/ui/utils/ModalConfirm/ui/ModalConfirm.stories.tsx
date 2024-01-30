import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { ModalConfirm } from '../index';
import { UITest } from 'ui/utils/UITest';
import { Text, textColor, textSize } from 'ui/components/shared/Text';

const meta: Meta<typeof ModalConfirm> = {
    title: 'utils/ModalConfirm',
    component: ModalConfirm,
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
type Story = StoryObj<typeof ModalConfirm>;

export const ModalConfirmDefault: Story = {
    args: {
       isOpen:true,
       onClose: () => {},
       title: 'Подтвердите действие',
       onConfirm: () => {},
       children: <Text>Вы уверены, что хотите выполнить данное действие?</Text>
    },
};
