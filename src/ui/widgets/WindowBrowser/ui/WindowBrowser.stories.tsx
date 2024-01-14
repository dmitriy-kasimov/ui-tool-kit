import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { WindowBrowser } from './WindowBrowser';
import { Text, textColor, textFont, textSize } from 'ui/components/shared/Text';
import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
import { Card } from 'ui/components/sections/Card';
import { Button } from 'ui/components/controls/buttons/Button';
import { TextField } from 'ui/components/controls/inputs/TextField';
import { Checkbox } from 'ui/components/controls/inputs/Checkbox';
import { Tape } from 'ui/widgets/Tape';
import { Select } from 'ui/components/controls/inputs/Select';
import { Slider } from 'ui/components/controls/inputs/Slider';
import { Switcher } from 'ui/components/controls/inputs/Switcher';
import { RadioGroup } from 'ui/components/controls/inputs/RadioGroup';
import { ProgressBar, ProgressBarType } from 'ui/components/shared/ProgressBar';

import { Table } from 'ui/widgets/Table';
import { TableCaption } from 'ui/widgets/Table/components/TableCaption';
import { TableHead } from 'ui/widgets/Table/components/TableHead';
import { TableRow } from 'ui/widgets/Table/components/TableRow';
import { TableData } from 'ui/widgets/Table/components/TableData';
import { TableBody } from 'ui/widgets/Table/components/TableBody';
import { TableContent } from 'ui/widgets/Table/components/TableContent';
import { TextArea } from 'ui/components/controls/inputs/TextArea';
import { Loader } from 'ui/components/shared/Loader';
import { LoaderSize } from 'ui/components/shared/Loader/types/LoaderProps';
import { UITest } from 'ui/utils/UITest';



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


const options = [
    { "title": "янв", "value": "01" },
    { "title": "фев", "value": "02" },
    { "title": "мар", "value": "03" },
    { "title": "апр", "value": "04" },
    { "title": "май", "value": "05" },
    { "title": "июн", "value": "06" },
    { "title": "июл", "value": "07" },
    { "title": "авг", "value": "08" },
    { "title": "сен", "value": "09" },
    { "title": "окт", "value": "10" },
    { "title": "ноя", "value": "11" },
    { "title": "дек", "value": "12" }
];

const onlinePlayers = [
  {id: 0, nickname: 'TR271V0R', rank: 'Crazy', score: 1488, status: 'Architector', ping: 24},
  {id: 1, nickname: '[M]aTRi[X]', rank: 'Мастер', score: 195, status: 'Гл. администратор', ping: 15},
  {id: 2, nickname: 'Le[G]ion_kirov_43rus', rank: 'Легенда', score: 1685, status: 'Хелпер', ping: 124},
  {id: 3, nickname: 'Dima_Kasim', rank: 'Новичок', score: 212, status: 'Администратор', ping: 224},
  {id: 4, nickname: 'Evil_Pryzrak', rank: 'Никто', score: 100, status: 'Игрок', ping: 160},
  {id: 5, nickname: 'SmartOryx60', rank: 'Crazy', score: 228, status: 'Игрок', ping: 56},
  {id: 6, nickname: 'CloudyShark30', rank: 'Новичок', score: 200, status: 'Игрок', ping: 44},
  {id: 7, nickname: 'Pi0ner', rank: 'Мастер', score: 51, status: 'Игрок', ping: 190},
  {id: 8, nickname: 'Alan_Masti', rank: 'Crazy', score: 567, status: 'Игрок', ping: 37},
  {id: 9, nickname: 'LaRGe', rank: 'Crazy', score: 1010, status: 'Игрок', ping: 15},
  {id: 10, nickname: 'M1RoN', rank: 'Crazy', score: 1000, status: 'Architector', ping: 13},
  {id: 0, nickname: 'TR271V0R', rank: 'Crazy', score: 1488, status: 'Architector', ping: 24},
  {id: 1, nickname: '[M]aTRi[X]', rank: 'Мастер', score: 195, status: 'Гл. администратор', ping: 15},
  {id: 2, nickname: 'Le[G]ion_kirov_43rus', rank: 'Легенда', score: 1685, status: 'Хелпер', ping: 124},
  {id: 3, nickname: 'Dima_Kasim', rank: 'Новичок', score: 212, status: 'Администратор', ping: 224},
  {id: 4, nickname: 'Evil_Pryzrak', rank: 'Никто', score: 100, status: 'Игрок', ping: 160},
  {id: 5, nickname: 'SmartOryx60', rank: 'Crazy', score: 228, status: 'Игрок', ping: 56},
  {id: 6, nickname: 'CloudyShark30', rank: 'Новичок', score: 200, status: 'Игрок', ping: 44},
  {id: 7, nickname: 'Pi0ner', rank: 'Мастер', score: 51, status: 'Игрок', ping: 190},
  {id: 8, nickname: 'Alan_Masti', rank: 'Crazy', score: 567, status: 'Игрок', ping: 37},
  {id: 9, nickname: 'LaRGe', rank: 'Crazy', score: 1010, status: 'Игрок', ping: 15},
  {id: 10, nickname: 'M1RoN', rank: 'Crazy', score: 1000, status: 'Architector', ping: 13},
  {id: 0, nickname: 'TR271V0R', rank: 'Crazy', score: 1488, status: 'Architector', ping: 24},
  {id: 1, nickname: '[M]aTRi[X]', rank: 'Мастер', score: 195, status: 'Гл. администратор', ping: 15},
  {id: 2, nickname: 'Le[G]ion_kirov_43rus', rank: 'Легенда', score: 1685, status: 'Хелпер', ping: 124},
  {id: 3, nickname: 'Dima_Kasim', rank: 'Новичок', score: 212, status: 'Администратор', ping: 224},
  {id: 4, nickname: 'Evil_Pryzrak', rank: 'Никто', score: 100, status: 'Игрок', ping: 160},
  {id: 5, nickname: 'SmartOryx60', rank: 'Crazy', score: 228, status: 'Игрок', ping: 56},
  {id: 6, nickname: 'CloudyShark30', rank: 'Новичок', score: 200, status: 'Игрок', ping: 44},
  {id: 7, nickname: 'Pi0ner', rank: 'Мастер', score: 51, status: 'Игрок', ping: 190},
  {id: 8, nickname: 'Alan_Masti', rank: 'Crazy', score: 567, status: 'Игрок', ping: 37},
  {id: 9, nickname: 'LaRGe', rank: 'Crazy', score: 1010, status: 'Игрок', ping: 15},
  {id: 10, nickname: 'M1RoN', rank: 'Crazy', score: 1000, status: 'Architector', ping: 13},
];

export const WindowBrowserGlobal: Story = {
  args: {
      title: 'Заголовок',
      tabs:[
          {name:'Вкладка1', onClick() {}, active: true},
          {name:'Вкладка2', onClick() {}},
      ],
      children: (
        <>
          <div style={{display:'inline-flex', alignItems:'flex-start', flexWrap:'wrap'}}>
            <Card>
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
            </Card>

            <Card>
              <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                <TextField value='TR271V0R' onChange={() => {}} disabled label={'Ur nickname'} limit={32}/>
                <TextField value='' onChange={() => {}} label={'Ur mail (optional)'} limit={64}/>
                <TextField value='' onChange={() => {}} label={'Ur pass'} limit={32} masked/>
                <TextField value='' onChange={() => {}} label={'confirm pass'} limit={32} masked/>
                <TextArea value='' onChange={()=>{}} label={'Describe your char'} limit={150}/>
              </div>
            </Card>
            <Card>
              <div style={{display: 'inline-flex', flexDirection: 'column', alignItems:'flex-start'}}>
                <Slider 
                    value={5}
                    onChange={() => {}}
                    min={0}
                    max={100}
                    step={1}
                  />
                  <Switcher 
                    value={true}
                    onChange={() => {}}
                  id={'123'}/>
                  <Select
                      options={options}
                      selected={null}
                      onChange={() => {}}
                      placeholder='Выберите месяц'
                  />
                  <Checkbox id='rules' onChange={()=>{}}><Text size={textSize.REGULAR}>Check the rules</Text></Checkbox>
                  <br/>
                  <Button><Text size={textSize.IMPORTANT}>Active</Text></Button>
                  <Button disabled><Text size={textSize.IMPORTANT}>Disabled</Text></Button>
                  <RadioGroup 
                    name='stories_test'
                    onChange={()=>{}}
                    options={[
                      {value: 'male', description: 'Male'},
                      {value: 'female', description: 'Female'},
                      {value: 'trans', description: 'Hz', disabled:true},
                    ]}
                  />
              </div>
            </Card>
            <Card>
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
                </div>
            </Card>
            <Card>
              <div style={{display: 'inline-flex', flexDirection: 'column', alignItems:'flex-start'}}>
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
            </Card>
            <Card>
              <div style={{display: 'inline-flex', flexDirection: 'column', alignItems:'flex-start'}}>
                <ProgressBar max={100} value={30}/>
                <ProgressBar max={100} value={45}/>
                <ProgressBar max={100} value={55}/>
                <ProgressBar max={100} value={75}/>
                <ProgressBar max={100} value={100}/>
                <div style={{display:'flex'}}>
                  <ProgressBar type={ProgressBarType.VERTICAL} max={100} value={30}/>
                  <ProgressBar type={ProgressBarType.VERTICAL} max={100} value={45}/>
                  <ProgressBar type={ProgressBarType.VERTICAL} max={100} value={55}/>
                  <ProgressBar type={ProgressBarType.VERTICAL} max={100} value={75}/>
                  <ProgressBar type={ProgressBarType.VERTICAL} max={100} value={100}/>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{display: 'inline-flex', flexDirection: 'column', alignItems:'flex-start'}}>
                <Table>
                    <TableCaption>
                        <Text font={textFont.TITLE} size={textSize.IMPORTANT}>online players</Text>
                    </TableCaption>

                    <TableContent>
                      <TableHead>
                        <TableRow>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 50}}><Text font={textFont.TITLE} size={textSize.REGULAR}>ID</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 200}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Name</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Rank</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Score</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 175}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Status</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 150}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Ping (ms)</Text></TableData>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {onlinePlayers.map(player => 
                          <TableRow>
                            <TableData style={{display:'inline-flex', justifyContent:'center', width: 50}}><Text>{player.id}</Text></TableData>
                            <TableData style={{display:'inline-flex', justifyContent:'center', width: 200}}><Text>{player.nickname}</Text></TableData>
                            <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text>{player.rank}</Text></TableData>
                            <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text>{player.score}</Text></TableData>
                            <TableData style={{display:'inline-flex', justifyContent:'center', width: 175}}><Text>{player.status}</Text></TableData>
                            <TableData style={{display:'inline-flex', justifyContent:'center', width: 150}}><Text>{player.ping}</Text></TableData>
                          </TableRow>
                        )}
                      </TableBody>
                    </TableContent>
                </Table>
              </div>
            </Card>  

            <Card>
              <div style={{display: 'inline-flex', flexDirection: 'column', alignItems:'center'}}>
                <Loader
                  size={LoaderSize.SMALL}
                >
                  <Text>Loading...</Text>
                </Loader>
                <Loader
                  size={LoaderSize.MIDDLE}
                >
                  <Text>Loading...</Text>
                </Loader>
                <Loader
                  size={LoaderSize.BIG}
                >
                  <Text>Loading...</Text>
                </Loader>
              </div>
            </Card>  

            <Card>
              <div style={{display: 'inline-flex', flexDirection: 'column', alignItems:'center'}}>
                <UITest />
              </div>
            </Card>  
          </div>
        </>
      )
  },  
};