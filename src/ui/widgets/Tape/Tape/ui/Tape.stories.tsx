import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Tape } from './Tape';
import { Text } from 'ui/components/shared/Text';
import { VStack } from 'ui/components/shared/Stack';
import { PostType } from '../../Post/types/PostProps';


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

const posts: PostType[] = [
  {id: '1', title: 'Основной шрифт', subtitle: '04/29/2024', description: (
    <VStack max gap="xs">
      <Text size='m' >Шрифт Roboto основной, размер: TITLE</Text>
      <Text size='m' >Шрифт Roboto основной, размер: SUBTITLE</Text>
      <Text size='m' >Шрифт Roboto основной, размер: IMPORTANT</Text>
      <Text size='m' >Шрифт Roboto основной, размер: REGULAR</Text>
      <Text size='m' >Шрифт Roboto для заголовоков, размер: REGULARSMALL</Text>
  
      <Text size='m' color='main'>Шрифт Roboto основной, тема: основной</Text>
      <Text size='m' color='secondary'>Шрифт Roboto основной, тема: второстепенный</Text>
      <Text size='m' color='warning'>Шрифт Roboto основной, тема: предупреждение</Text>
      <Text size='m' color='error'>Шрифт Roboto основной, тема: ошибка</Text>
      <Text size='m' color='success'>Шрифт Roboto основной, тема: успешно выполнено</Text>
      <Text size='m' color='info'>Шрифт Roboto основной, тема: информация</Text>
    </VStack>
  )},
  {id: '2', title: 'Шрифт для заголовков', subtitle: '04/29/2024', description: (
      <VStack max gap="xs">
        <Text size='xl' >Шрифт Roboto для заголовоков, размер: TITLE</Text>
        <Text size='xl' >Шрифт Roboto для заголовоков, размер: SUBTITLE</Text>
        <Text size='xl' >Шрифт Roboto для заголовоков, размер: IMPORTANT</Text>
        <Text size='xl' >Шрифт Roboto для заголовоков, размер: REGULAR</Text>
        <Text size='xl' >Шрифт Roboto для заголовоков, размер: REGULARSMALL</Text>

    
        <Text size='xl' color='main'>Шрифт Roboto для заголовоков, тема: основной</Text>
        <Text size='xl' color='secondary'>Шрифт Roboto для заголовоков, тема: второстепенный</Text>
        <Text size='xl' color='warning'>Шрифт Roboto для заголовоков, тема: предупреждение</Text>
        <Text size='xl' color='error'>Шрифт Roboto для заголовоков, тема: ошибка</Text>
        <Text size='xl' color='success'>Шрифт Roboto для заголовоков, тема: успешно выполнено</Text>
        <Text size='xl' color='info'>Шрифт Roboto для заголовоков, тема: информация</Text>
      </VStack>
  )}
];


export const Default: Story = {
    args: {
      header: <Text size='xl'>The latest news</Text>,
      posts: posts
    },
};

export const Empty: Story = {
  args: {
    header: <Text size='xl'>The latest news</Text>,
    posts: []
  },
};
