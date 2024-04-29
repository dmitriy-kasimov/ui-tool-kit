import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Table } from '../index';

import { Text } from 'ui/components/shared/Text';
import { TableBody } from '../components/TableBody';
import { TableRow } from '../components/TableRow';
import { TableData } from '../components/TableData';
import { TableCaption } from '../components/TableCaption';
import { TableHead } from '../components/TableHead';
import { TableContent } from '../components/TableContent';




const meta: Meta<typeof Table> = {
    title: 'widgets/information/Table',
    component: Table,
    decorators: [
        (Story) => (
          decoratorBackground(Story)
        ),
      ],
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Table>;

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
export const TableScrollableHorizontalVertical: Story = {
    args: {
       children: (
        <>
          <TableCaption>
              <Text font='title' size='important'>online players</Text>
          </TableCaption>

          <TableContent>
            <TableHead>
              <TableRow>
                <TableData style={{display:'inline-flex', justifyContent:'center', width: 50}}><Text font='title' size='regular'>ID</Text></TableData>
                <TableData style={{display:'inline-flex', justifyContent:'center', width: 200}}><Text font='title' size='regular'>Name</Text></TableData>
                <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font='title' size='regular'>Rank</Text></TableData>
                <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font='title' size='regular'>Score</Text></TableData>
                <TableData style={{display:'inline-flex', justifyContent:'center', width: 175}}><Text font='title' size='regular'>Status</Text></TableData>
                <TableData style={{display:'inline-flex', justifyContent:'center', width: 150}}><Text font='title' size='regular'>Ping (ms)</Text></TableData>
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
        </>  
       )
    },
};

export const TableScrollableHorizontal: Story = {
    args: {
       children: (
        <>
          <TableCaption>
              <Text font='title' size='important'>online players</Text>
          </TableCaption>

          <TableContent>
            <TableHead>
              <TableRow>
                <TableData style={{display:'inline-flex', justifyContent:'center', width: 50}}><Text font='title' size='regular'>ID</Text></TableData>
                <TableData style={{display:'inline-flex', justifyContent:'center', width: 200}}><Text font='title' size='regular'>Name</Text></TableData>
                <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font='title' size='regular'>Rank</Text></TableData>
                <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font='title' size='regular'>Score</Text></TableData>
                <TableData style={{display:'inline-flex', justifyContent:'center', width: 175}}><Text font='title' size='regular'>Status</Text></TableData>
                <TableData style={{display:'inline-flex', justifyContent:'center', width: 150}}><Text font='title' size='regular'>Ping (ms)</Text></TableData>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                  <TableData style={{display:'inline-flex', justifyContent:'center', width: 50}}><Text>1</Text></TableData>
                  <TableData style={{display:'inline-flex', justifyContent:'center', width: 200}}><Text>Vova_VoVaN</Text></TableData>
                  <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text>Crazy</Text></TableData>
                  <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text>1401</Text></TableData>
                  <TableData style={{display:'inline-flex', justifyContent:'center', width: 175}}><Text>Admin</Text></TableData>
                  <TableData style={{display:'inline-flex', justifyContent:'center', width: 150}}><Text>87</Text></TableData>
                </TableRow>
            </TableBody>
          </TableContent>
        </>  
       )
    },
};

export const TableScrollableVertical: Story = {
    args: {
       children: (
        <>
          <TableCaption>
              <Text font='title' size='important'>online players</Text>
          </TableCaption>
          <TableContent>
            <TableHead>
              <TableRow>
                <TableData style={{display:'inline-flex', justifyContent:'center', width: 50}}><Text font='title' size='regular'>ID</Text></TableData>
                <TableData style={{display:'inline-flex', justifyContent:'center', width: 200}}><Text font='title' size='regular'>Name</Text></TableData>
                <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font='title' size='regular'>Rank</Text></TableData>
              </TableRow>
            </TableHead>
            <TableBody>
              {onlinePlayers.map(player => 
                <TableRow>
                  <TableData style={{display:'inline-flex', justifyContent:'center', width: 50}}><Text>{player.id}</Text></TableData>
                  <TableData style={{display:'inline-flex', justifyContent:'center', width: 200}}><Text>{player.nickname}</Text></TableData>
                  <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text>{player.rank}</Text></TableData>
                </TableRow>
              )}
            </TableBody>
          </TableContent>
        </>  
       )
    },
};