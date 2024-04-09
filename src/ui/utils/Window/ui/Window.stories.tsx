import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Window } from './Window';
import { Text, textColor, textSize } from 'ui/components/shared/Text';
import { Skeleton } from 'ui/components/shared/Skeleton/Skeleton';
import { VStack } from 'ui/components/shared/Stack';

const meta: Meta<typeof Window> = {
    title: 'utils/modal/Window',
    component: Window,
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
type Story = StoryObj<typeof Window>;

export const ModalOpen: Story = {
    args: {
       isOpen:true,
       children: (
       <VStack gap='32'>
            <Skeleton width={300} height={200}/>
            <Skeleton width={300} height={200}/>
       </VStack>
       )
    },
};