import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { WindowBrowser } from './WindowBrowser';
import { Text, textColor } from 'ui/components/text/Text';
import { decoratorBackground } from '../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Panel } from 'ui/components/panels/Panel';

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
export const WindowBrowserReg: Story = {
    args: {
        title: 'Заголовок',
        tabs:[
            {name:'Вкладка1', onClick() {}},
            {name:'Вкладка2', onClick() {}},
        ],
        children: (
          <Text >Here you can see some content from equal tab Here you can see some content from equal tab Here you can see some content from equal tab Here you can see some content from equal tab</Text>
        )
    },  
};
