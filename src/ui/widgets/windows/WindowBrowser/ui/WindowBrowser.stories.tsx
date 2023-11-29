import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { WindowBrowser } from './WindowBrowser';
import { Text, textColor, textSize } from 'ui/components/text/Text';
import { decoratorBackground } from '../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Panel } from 'ui/components/panels/Panel';
import { Button } from 'ui/components/buttons/Button';
import { Input } from 'ui/components/inputs/Input';
import { Checkbox } from 'ui/components/checkboxes/Checkbox';

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
          <Text>Here you can see some content from equal tab Here you can see some content from equal tab Here you can see some content from equal tab Here you can see some content from equal tab</Text>
        )
    },  
};

export const WindowBrowser2: Story = {
  args: {
      title: 'Заголовок',
      tabs:[
          {name:'Вкладка1', onClick() {}},
          {name:'Вкладка2', onClick() {}},
      ],
      children: (
        <>
        
        <Text>Here you can see some content from equal tab Here you can see some content from equal tab Here you can see some content from equal tab Here you can see some content from equal tab</Text>
        <Panel>
        <Button><Text size={textSize.IMPORTANT}>Active</Text></Button>
            <Button disabled><Text size={textSize.IMPORTANT}>Disabled</Text></Button>
            <br/>
            <Input label={'Ur nickname'} limit={32}/>
            <Input label={'Ur mail (optional)'} limit={32}/>
            <Input label={'Ur pass'} limit={32} masked/>
            <Input label={'confirm pass'} limit={32} masked/>
            <br/>
            <Checkbox> <Text size={textSize.REGULAR}>Accept the rules</Text> </Checkbox>
            <br/>
            <Text size={textSize.TITLE}>size: TITLE</Text>
            <br/>
            <Text size={textSize.SUBTITLE}>size: SUBTITLE</Text>
            <br/>
            <Text size={textSize.IMPORTANT}>size: IMPORTANT</Text>
            <br/>
            <Text size={textSize.REGULAR}>size: REGULAR</Text>
            <br/>
            <Text size={textSize.REGULARSMALL}>size: REGULARSMALL</Text>
            <br/>
            <Text color={textColor.MAIN}>color: MAIN</Text>
            <br/>
            <Text color={textColor.SECONDARY}>color: SECONDARY</Text>
            <br/>
            <Text color={textColor.WARNING}>color: WARNING</Text>
            <br/>
            <Text color={textColor.ERROR}>color: ERROR</Text>
            <br/>
            <Text color={textColor.SUCCESSFULLY}>color: SUCCESSFULLY</Text>
            <br/>
            <Text color={textColor.INFORMATION}>color: INFORMATION</Text>
        </Panel>
        </>
      )
  },  
};