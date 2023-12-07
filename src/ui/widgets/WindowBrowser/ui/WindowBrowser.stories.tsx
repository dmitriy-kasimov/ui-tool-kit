import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { WindowBrowser } from './WindowBrowser';
import { Text, textColor, textSize } from 'ui/components/shared/text/Text';
import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Panel } from 'ui/components/forms/panels/Panel';
import { Button } from 'ui/components/controls/buttons/Button';
import { Input } from 'ui/components/controls/inputs/Input';
import { Checkbox } from 'ui/components/controls/checkboxes/Checkbox';
import { Tape } from 'ui/widgets/Tape';

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

export const WindowBrowserGlobal: Story = {
  args: {
      title: 'Заголовок',
      tabs:[
          {name:'Вкладка1', onClick() {}, active: true},
          {name:'Вкладка2', onClick() {}},
      ],
      children: (
        <>
          <div style={{display:'inline-flex', alignItems:'flex-start'}}>
            <Panel>
              <Tape
                title='The latest news'
                posts={[
                  {id: 9, title: 'Update to ver 1.0.1', subtitle: '10/27/2024', children: (<Text>• Bug fixed</Text>)},
                  {id: 8, title: 'Maximum online: 50!', subtitle: '10/15/2024', children: (<Text>123</Text>)},
                  {id: 7, title: 'The server was opened!', subtitle: '10/04/2024', children: (<Text><Text size={textSize.IMPORTANT} color={textColor.SUCCESSFULLY}>On the 4th of October 2024</Text> our server was started! Dear players, welcome to the LAtruckers!!! Thank you for your waiting, we are sure - we will appreciate our work. </Text>)},
                  {id: 6, title: 'New release date!', subtitle: '10/01/2024', children: (<Text>The server will been starting 10/04/2024 !!!</Text>)},
                  {id: 5, title: 'Maximum online: 50!', subtitle: '10/15/2024', children: (<Text>123</Text>)},
                  {id: 4, title: 'Maximum online: 50!', subtitle: '10/15/2024', children: (<Text>123</Text>)},
                  {id: 3, title: 'Maximum online: 50!', subtitle: '10/15/2024', children: (<Text>123</Text>)},
                  {id: 2, title: 'Maximum online: 50!', subtitle: '10/15/2024', children: (<Text>123</Text>)},
                  {id: 1, title: 'Maximum online: 50!', subtitle: '10/15/2024', children: (<Text>123</Text>)},
                ]}
              />
            </Panel>

            <Panel>
              <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                <Input label={'Ur nickname'} limit={32}/>
                <Input label={'Ur mail (optional)'} limit={64}/>
                <Input label={'Ur pass'} limit={32} masked/>
                <Input label={'confirm pass'} limit={32} masked/>
        
                <Checkbox> <Text size={textSize.REGULAR}>Check the rules</Text> </Checkbox>
                <br/>
                <Button><Text size={textSize.IMPORTANT}>Active</Text></Button>
                <Button disabled><Text size={textSize.IMPORTANT}>Disabled</Text></Button>
              </div>
            </Panel>

            <Panel>
              <div style={{display: 'inline-flex', flexDirection: 'column', alignItems:'flex-start'}}>
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
                </div>
              </Panel>
          </div>
        </>
      )
  },  
};