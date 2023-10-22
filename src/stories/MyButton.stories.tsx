import type { Meta, StoryObj } from '@storybook/react';

import MyButton from '../MyButton/MyButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/MyButton',
  component: MyButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const RedButton: Story = {
    args: {
        color: 'red',
        children: 'some text'
    },  
};

export const OrangeButton: Story = {
    args: {
        color: 'orange',
        children: 'some text'
    },  
};

export const BigButton: Story = {
    args: {
        color: 'red',
        children: 'some text',
        big: true
    },  
};
