import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Tape } from '../index';
import { Text, textColor, textSize } from 'ui/components/shared/Text';


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
      title: 'The latest news',
      posts: [
        {id: 2, title: 'The server was updated', subtitle: '10/27/2024', children: (<Text>123</Text>)},
        {id: 1, title: 'Maximum online: 50!', subtitle: '10/15/2024', children: (<Text>123</Text>)},
        {id: 0, title: 'The server was opened!', subtitle: '10/04/2024', children: (<Text>In the <Text size={textSize.IMPORTANT} color={textColor.SUCCESSFULLY}>4th October 2024</Text> our server was started! Dear players, welcome to the LAtruckers!!! Ty for your waiting, we are sure - we will appreciate our work. </Text>)}
      ]
    },
};

export const TapeScroolable: Story = {
  args: {
    title: 'The latest news',
    posts: [
      {id: 7, title: 'The server was updated', subtitle: '10/27/2024', children: (<Text>123</Text>)},
      {id: 6, title: 'The server was updated', subtitle: '10/27/2024', children: (<Text>123</Text>)},
      {id: 5, title: 'The server was updated', subtitle: '10/27/2024', children: (<Text>123</Text>)},
      {id: 4, title: 'The server was updated', subtitle: '10/27/2024', children: (<Text>123</Text>)},
      {id: 3, title: 'The server was updated', subtitle: '10/27/2024', children: (<Text>123</Text>)},
      {id: 2, title: 'The server was updated', subtitle: '10/27/2024', children: (<Text>123</Text>)},
      {id: 1, title: 'Maximum online: 50!', subtitle: '10/15/2024', children: (<Text>123</Text>)},
      {id: 0, title: 'The server was opened!', subtitle: '10/04/2024', children: (<Text>In the <Text size={textSize.IMPORTANT} color={textColor.SUCCESSFULLY}>4th October 2024</Text> our server was started! Dear players, welcome to the LAtruckers!!! Ty for your waiting, we are sure - we will appreciate our work. </Text>)}
    ]
  },
};