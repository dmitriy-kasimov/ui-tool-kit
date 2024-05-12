import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Sidebar } from './Sidebar';
import { Icon } from 'ui/components/shared/Icon';
import { Text } from 'ui/components/shared/Text';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/information/Sidebar',
    component: Sidebar,
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
type Story = StoryObj<typeof Sidebar>;

export const ModalOpen: Story = {
    args: {
      items: [
        {desciption: <Text>Link1</Text>, onClick: ()=>{console.log('link 1 has worked!')}},
        {desciption: <Text>Link2</Text>, onClick: ()=>{console.log('link 2 has worked!')}},
        {desciption: <Text>Link3</Text>, onClick: ()=>{console.log('link 3 has worked!')}}
      ]
    },
};