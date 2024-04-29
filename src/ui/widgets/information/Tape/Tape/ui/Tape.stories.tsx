import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Tape } from './Tape';
import { Text } from 'ui/components/shared/Text';
import { Post } from '../../Post/ui/Post';
import { VStack } from 'ui/components/shared/Stack';
import { PostType } from '../../Post/types/PostProps';


const meta: Meta<typeof Tape> = {
    title: 'widgets/information/Tape',
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

const posts: PostType[] = [
  {id: '1', title: 'Основной шрифт', subtitle: '04/29/2024', description: (
    <VStack max gap="4">
      <Text font='main' size='title'>Шрифт Roboto основной, размер: TITLE</Text>
      <Text font='main' size='subtitle'>Шрифт Roboto основной, размер: SUBTITLE</Text>
      <Text font='main' size='important'>Шрифт Roboto основной, размер: IMPORTANT</Text>
      <Text font='main' size='regular'>Шрифт Roboto основной, размер: REGULAR</Text>
      <Text font='main' size='regularsmall'>Шрифт Roboto для заголовоков, размер: REGULARSMALL</Text>
  
      <Text font='main' color='main'>Шрифт Roboto основной, тема: основной</Text>
      <Text font='main' color='secondary'>Шрифт Roboto основной, тема: второстепенный</Text>
      <Text font='main' color='warning'>Шрифт Roboto основной, тема: предупреждение</Text>
      <Text font='main' color='error'>Шрифт Roboto основной, тема: ошибка</Text>
      <Text font='main' color='success'>Шрифт Roboto основной, тема: успешно выполнено</Text>
      <Text font='main' color='info'>Шрифт Roboto основной, тема: информация</Text>
    </VStack>
  )},
  {id: '2', title: 'Шрифт для заголовков', subtitle: '04/29/2024', description: (
      <VStack max gap="4">
        <Text font='title' size='title'>Шрифт Roboto для заголовоков, размер: TITLE</Text>
        <Text font='title' size='subtitle'>Шрифт Roboto для заголовоков, размер: SUBTITLE</Text>
        <Text font='title' size='important'>Шрифт Roboto для заголовоков, размер: IMPORTANT</Text>
        <Text font='title' size='regular'>Шрифт Roboto для заголовоков, размер: REGULAR</Text>
        <Text font='title' size='regularsmall'>Шрифт Roboto для заголовоков, размер: REGULARSMALL</Text>

    
        <Text font='title' color='main'>Шрифт Roboto для заголовоков, тема: основной</Text>
        <Text font='title' color='secondary'>Шрифт Roboto для заголовоков, тема: второстепенный</Text>
        <Text font='title' color='warning'>Шрифт Roboto для заголовоков, тема: предупреждение</Text>
        <Text font='title' color='error'>Шрифт Roboto для заголовоков, тема: ошибка</Text>
        <Text font='title' color='success'>Шрифт Roboto для заголовоков, тема: успешно выполнено</Text>
        <Text font='title' color='info'>Шрифт Roboto для заголовоков, тема: информация</Text>
      </VStack>
  )}
];


export const Default: Story = {
    args: {
      title: 'The latest news',
      posts: posts
    },
};

export const Empty: Story = {
  args: {
    title: 'The latest news',
    posts: []
  },
};
