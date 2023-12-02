import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Post } from '../index';
import { Text, textColor } from 'ui/components/text/Text';


const meta: Meta<typeof Post> = {
    title: 'components/Post',
    component: Post,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {
       
    },
};

export default meta;
type Story = StoryObj<typeof Post>;

export const PostDefault: Story = {
    args: {
       title: 'The server was opened in OBT mood!',
       subtitle: '10/04/2016',
       children: (<Text color={textColor.WARNING}>It's magic!</Text>)
    },
};