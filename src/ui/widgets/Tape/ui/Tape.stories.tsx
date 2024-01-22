import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Tape } from '../index';
import { Text, textColor, textSize } from 'ui/components/shared/Text';
import { Post } from '../components/Post';


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

export const TapeWithoutOverflow: Story = {
    args: {
      title: 'The latest news',
      children:(
        <>
          <Post
          id={0}
          title={'Title'}
          subtitle={'Subtitle'}
          >
            <Text>Something about post1</Text>
          </Post>
        </> 
      )
    },
};

const posts = [
  {id: 0, title: 'Title', subtitle:'something'},
  {id: 0, title: 'Title', subtitle:'something'},
  {id: 0, title: 'Title', subtitle:'something'},
  {id: 0, title: 'Title', subtitle:'something'},
  {id: 0, title: 'Title', subtitle:'something'},
  {id: 0, title: 'Title', subtitle:'something'},
  {id: 0, title: 'Title', subtitle:'something'},
  {id: 0, title: 'Title', subtitle:'something'},
  {id: 0, title: 'Title', subtitle:'something'},
  {id: 0, title: 'Title', subtitle:'something'},
  {id: 0, title: 'Title', subtitle:'something'},
]
export const TapeWithOverflow: Story = {
  args: {
    title: 'The latest news',
    children:(
      <>
       {posts.map((post, index) => <Post
        id={index}
        key={index}
        title={post.title}
        subtitle={post.subtitle}
       >
        <Text>Something about post #{index+1}</Text>
       </Post>)}
      </> 
    )
  },
};