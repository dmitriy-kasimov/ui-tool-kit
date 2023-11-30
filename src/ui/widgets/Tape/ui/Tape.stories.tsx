import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Tape } from '../index';
import { Text, textColor } from 'ui/components/text/Text';


const meta: Meta<typeof Tape> = {
    title: 'widgets/Tape',
    component: Tape,
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
type Story = StoryObj<typeof Tape>;

export const TapeDefault: Story = {
    args: {
       title: 'The Rules',
       posts: [
        {title: '1. Общие положения', subtitle: null, children: (<Text>123</Text>)},
        {title: '1. Общие положения', subtitle: null, children: (<Text>123</Text>)},
        {title: '1. Общие положения', subtitle: null, children: (<Text>123</Text>)},
        {title: '1. Общие положения', subtitle: null, children: (<Text>123</Text>)}
       ]
    },
};