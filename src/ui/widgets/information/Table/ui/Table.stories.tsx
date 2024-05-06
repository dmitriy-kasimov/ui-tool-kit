import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Table, TableBodyRow } from '../index';

import { Text } from 'ui/components/shared/Text';
import { TableBody } from '../components/TableBody';
import { TableRow } from '../components/TableRow';
import { TableData } from '../components/TableData';
import { TableCaption } from '../components/TableCaption';
import { TableHead } from '../components/TableHead';
import { TableContent } from '../components/TableContent';
import { Skeleton } from 'ui/components/shared/Skeleton';




const meta: Meta<typeof Table> = {
    title: 'widgets/information/Table',
    component: Table,
    decorators: [
        (Story) => (
          decoratorBackground(Story)
        ),
      ],
    parameters: {
        layout: 'fullscreen',
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
];

export const ScrollableHorizontalVertical: Story = {
    args: {
      caption: <Text font='xl' >Online players</Text>,
      heads:[
        {columnId: 'id', columnName: 'ID', width: 50},
        {columnId: 'avatar', columnName: 'Ava', width: 30},
        {columnId: 'name', columnName: 'Name', width: 200},
        {columnId: 'rank', columnName: 'Rank', width: 100},
        {columnId: 'score', columnName: 'Score', width: 100},
        {columnId: 'status', columnName: 'Status', width: 175},
        {columnId: 'ping', columnName: 'Ping (ms)', width: 150},
      ],
      body: onlinePlayers.map<TableBodyRow>(player => 
        [
          {columnId: 'id', content: <Text>{player.id}</Text>},
          {columnId: 'avatar', content: <Skeleton width={32} height={32} border="50%"/>},
          {columnId: 'name', content: <Text>{player.nickname}</Text>},
          {columnId: 'rank', content: <Text>{player.rank}</Text>},
          {columnId: 'score', content: <Text>{player.score}</Text>},
          {columnId: 'status', content: <Text>{player.status}</Text>},
          {columnId: 'ping', content: <Text>{player.ping}</Text>},
        ]
      ),
      maxWidthContent: "600px",
      maxHeightContent: "300px"
    },
};

export const ScrollableHorizontal: Story = {
  args: {
    caption: <Text font='xl' >Online players</Text>,
    heads:[
      {columnId: 'id', columnName: 'ID', width: 50},
      {columnId: 'avatar', columnName: 'Ava', width: 30},
      {columnId: 'name', columnName: 'Name', width: 200},
      {columnId: 'rank', columnName: 'Rank', width: 100},
      {columnId: 'score', columnName: 'Score', width: 100},
      {columnId: 'status', columnName: 'Status', width: 175},
      {columnId: 'ping', columnName: 'Ping (ms)', width: 150},
    ],
    body: onlinePlayers.map<TableBodyRow>(player => 
      [
        {columnId: 'id', content: <Text>{player.id}</Text>},
        {columnId: 'avatar', content: <Skeleton width={32} height={32} border="50%"/>},
        {columnId: 'name', content: <Text>{player.nickname}</Text>},
        {columnId: 'rank', content: <Text>{player.rank}</Text>},
        {columnId: 'score', content: <Text>{player.score}</Text>},
        {columnId: 'status', content: <Text>{player.status}</Text>},
        {columnId: 'ping', content: <Text>{player.ping}</Text>},
      ]
    ),
    maxWidthContent: "600px",
    maxHeightContent: "700px"
  },
};

export const ScrollableVertical: Story = {
  args: {
    caption: <Text font='xl' >Online players</Text>,
    heads:[
      {columnId: 'id', columnName: 'ID', width: 50},
      {columnId: 'avatar', columnName: 'Ava', width: 30},
      {columnId: 'name', columnName: 'Name', width: 200},
      {columnId: 'rank', columnName: 'Rank', width: 100},
      {columnId: 'score', columnName: 'Score', width: 100},
      {columnId: 'status', columnName: 'Status', width: 175},
      {columnId: 'ping', columnName: 'Ping (ms)', width: 150},
    ],
    body: onlinePlayers.map<TableBodyRow>(player => 
      [
        {columnId: 'id', content: <Text>{player.id}</Text>},
        {columnId: 'avatar', content: <Skeleton width={32} height={32} border="50%"/>},
        {columnId: 'name', content: <Text>{player.nickname}</Text>},
        {columnId: 'rank', content: <Text>{player.rank}</Text>},
        {columnId: 'score', content: <Text>{player.score}</Text>},
        {columnId: 'status', content: <Text>{player.status}</Text>},
        {columnId: 'ping', content: <Text>{player.ping}</Text>},
      ]
    ),
    maxWidthContent: "825px",
    maxHeightContent: "300px"
  },
};