import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { WindowBrowser } from './WindowBrowser';
import { Text, textFont, textSize } from 'ui/components/shared/Text';
import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Link } from 'ui/components/controls/links/Link';
import { Card } from 'ui/components/sections/Card';
import { TextField } from 'ui/components/controls/inputs/TextField';
import { ProgressBar } from 'ui/components/shared/ProgressBar';



// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'widgets/WindowBrowser',
  component: WindowBrowser,
  decorators: [
    (Story) => (
      decoratorBackground(Story)
    )
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof WindowBrowser >;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WindowBrowserEmpty: Story = {
    args: {
        title: <Text size={textSize.TITLE} font={textFont.TITLE}>Заголовок</Text>,
        links: (
          <>
            <Link onClick={()=>{}}><Text size={textSize.IMPORTANT}>Link 1</Text></Link>
            <Link onClick={()=>{}}><Text size={textSize.IMPORTANT}>Link 2</Text></Link>
            <Link onClick={()=>{}}><Text size={textSize.IMPORTANT}>Link 3</Text></Link>
          </>
        ),
        children: (<></>),
        isOpen: true
        
    },  
};

export const WindowBrowserFulscreen: Story = {
  args: {
      title: <Text size={textSize.TITLE} font={textFont.TITLE}>Заголовок</Text>,
      links: (
        <>
          <Link onClick={()=>{}}><Text size={textSize.IMPORTANT}>Link 1</Text></Link>
          <Link onClick={()=>{}}><Text size={textSize.IMPORTANT}>Link 2</Text></Link>
          <Link onClick={()=>{}} disabled><Text size={textSize.IMPORTANT}>Link 3</Text></Link>
        </>
      ),
      fullscreen: true,
      children: (
        <>
       
        </>
      ),
      isOpen: true,
      onClose: function(){}
  },  
};

export const WindowBrowserScrollable: Story = {
  args: {
      title: <Text size={textSize.TITLE} font={textFont.TITLE}>Заголовок</Text>,
      links: (
        <>
          <Link onClick={()=>{}}><Text size={textSize.IMPORTANT}>Link 1</Text></Link>
          <Link onClick={()=>{}}><Text size={textSize.IMPORTANT}>Link 2</Text></Link>
          <Link onClick={()=>{}} disabled><Text size={textSize.IMPORTANT}>Link 3</Text></Link>
        </>
      ),
      children: (
        <div style={{display:'flex', flexDirection:'column'}}>
          <Card
            key={0}
          >
            <div style={{width:'500px', height:'500px'}}></div>
          </Card>
          <Card
            key={1}
          >
            <div style={{width:'500px', height:'500px'}}></div>
          </Card>
          <Card
            key={2}
          >
            <div style={{width:'500px', height:'500px'}}></div>
          </Card>
        </div>
      ),
      isOpen: true,
      onClose: function(){}
  },  
};

export const WindowBrowserNotClosable: Story = {
  args: {
      title: <Text size={textSize.TITLE} font={textFont.TITLE}>Заголовок</Text>,
      links: (
        <>
          <Link onClick={()=>{}}><Text size={textSize.IMPORTANT}>Link 1</Text></Link>
          <Link onClick={()=>{}}><Text size={textSize.IMPORTANT}>Link 2</Text></Link>
          <Link onClick={()=>{}} disabled><Text size={textSize.IMPORTANT}>Link 3</Text></Link>
        </>
      ),
      children: (
        <div style={{display:'flex', flexDirection:'column'}}>
          <Card>
            <div style={{width:'500px', height:'500px'}}></div>
          </Card>
        </div>
      ),
      isOpen: true,
      onClose: function(){},
      isClosable: false
  },  
};