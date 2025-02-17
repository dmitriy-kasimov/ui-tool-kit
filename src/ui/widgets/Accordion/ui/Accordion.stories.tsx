import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './Accordion';
import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Text } from 'ui/components/shared/Text';

const meta: Meta<typeof Accordion> = {
    title: 'widgets/Accordion',
    component: Accordion,
    decorators: [
      (Story) => (
        decoratorBackground(Story)
      ),
      (Story) => (
        <div style={{width: 600, height: 600}}><Story /></div>
      ),
    ],
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const AccordionComponent: Story = {
    args: {
     title: <Text size={'l'}>Accordion Title</Text>,
      description: <Text>Accordion Description</Text>,
    },
};
