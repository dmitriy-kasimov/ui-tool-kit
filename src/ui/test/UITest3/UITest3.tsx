
import React from "react";
import { HStack, VStack } from "ui/components/shared/Stack";
import { Text } from "ui/components/shared/Text";
import { ProgressBar } from "ui/widgets/information/ProgressBar";
import { Table } from "ui/widgets/information/Table";
import { TableBodyRow } from "ui/widgets/information/Table";
import { PostType, Tape } from "ui/widgets/information/Tape";

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
    {id: 11, nickname: 'TR271V0R', rank: 'Crazy', score: 1488, status: 'Architector', ping: 24},
    {id: 12, nickname: '[M]aTRi[X]', rank: 'Мастер', score: 195, status: 'Гл. администратор', ping: 15},
    {id: 13, nickname: 'Le[G]ion_kirov_43rus', rank: 'Легенда', score: 1685, status: 'Хелпер', ping: 124},
    {id: 14, nickname: 'Dima_Kasim', rank: 'Новичок', score: 212, status: 'Администратор', ping: 224},
    {id: 15, nickname: 'Evil_Pryzrak', rank: 'Никто', score: 100, status: 'Игрок', ping: 160},
    {id: 16, nickname: 'SmartOryx60', rank: 'Crazy', score: 228, status: 'Игрок', ping: 56},
    {id: 17, nickname: 'CloudyShark30', rank: 'Новичок', score: 200, status: 'Игрок', ping: 44},
    {id: 18, nickname: 'Pi0ner', rank: 'Мастер', score: 51, status: 'Игрок', ping: 190},
    {id: 19, nickname: 'Alan_Masti', rank: 'Crazy', score: 567, status: 'Игрок', ping: 37},
    {id: 20, nickname: 'LaRGe', rank: 'Crazy', score: 1010, status: 'Игрок', ping: 15},
    {id: 21, nickname: 'M1RoN', rank: 'Crazy', score: 1000, status: 'Architector', ping: 13},
];

const posts: PostType[] = [
  {id: '1', title: 'The types of fonts', subtitle: '04/29/2024', description: (
    <VStack max gap="4">
      <Text font='s' >Font type S (Nunito Sans). Use for texts.</Text>
      <Text font='s' bold>Font type S (Nunito Sans). Use for texts (bold).</Text>
      <Text font='m' >Font type M (Nunito Sans). Use for texts.</Text>
      <Text font='m' bold>Font type M (Nunito Sans). Use for texts (bold).</Text>
      <Text font='l' >Font type L (Roboto). Use for titles.</Text>
      <Text font='l' bold>Font type L (Roboto). Use for titles (bold).</Text>
      <Text font='xl' >Font type XL (Roboto). Use for titles.</Text>
      <Text font='xl' bold>Font type XL (Roboto). Use for titles (bold).</Text>
    </VStack>
  )},
  {id: '2', title: 'The color specter: main', subtitle: '04/29/2024', description: (
    <VStack max gap="4">
      <Text font='s' >The semanthic of colors</Text>
      <Text font='s' bold>The semanthic of colors</Text>
      <Text font='m' >The semanthic of colors</Text>
      <Text font='m' bold>The semanthic of colors</Text>
      <Text font='l' >The semanthic of colors</Text>
      <Text font='l' bold>The semanthic of colors</Text>
      <Text font='xl' >The semanthic of colors</Text>
      <Text font='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
  {id: '3', title: 'The color specter: secondary', subtitle: '04/29/2024', description: (
    <VStack max gap="4">
      <Text color="secondary" font='s' >The semanthic of colors</Text>
      <Text color="secondary" font='s' bold>The semanthic of colors</Text>
      <Text color="secondary" font='m' >The semanthic of colors</Text>
      <Text color="secondary" font='m' bold>The semanthic of colors</Text>
      <Text color="secondary" font='l' >The semanthic of colors</Text>
      <Text color="secondary" font='l' bold>The semanthic of colors</Text>
      <Text color="secondary" font='xl' >The semanthic of colors</Text>
      <Text color="secondary" font='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
  {id: '4', title: 'The color specter: warning', subtitle: '04/29/2024', description: (
    <VStack max gap="4">
      <Text color="warning" font='s' >The semanthic of colors</Text>
      <Text color="warning" font='s' bold>The semanthic of colors</Text>
      <Text color="warning" font='m' >The semanthic of colors</Text>
      <Text color="warning" font='m' bold>The semanthic of colors</Text>
      <Text color="warning" font='l' >The semanthic of colors</Text>
      <Text color="warning" font='l' bold>The semanthic of colors</Text>
      <Text color="warning" font='xl' >The semanthic of colors</Text>
      <Text color="warning" font='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
  {id: '5', title: 'The color specter: error', subtitle: '04/29/2024', description: (
    <VStack max gap="4">
      <Text color="error" font='s' >The semanthic of colors</Text>
      <Text color="error" font='s' bold>The semanthic of colors</Text>
      <Text color="error" font='m' >The semanthic of colors</Text>
      <Text color="error" font='m' bold>The semanthic of colors</Text>
      <Text color="error" font='l' >The semanthic of colors</Text>
      <Text color="error" font='l' bold>The semanthic of colors</Text>
      <Text color="error" font='xl' >The semanthic of colors</Text>
      <Text color="error" font='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
  {id: '6', title: 'The color specter: success', subtitle: '04/29/2024', description: (
    <VStack max gap="4">
      <Text color="success" font='s' >The semanthic of colors</Text>
      <Text color="success" font='s' bold>The semanthic of colors</Text>
      <Text color="success" font='m' >The semanthic of colors</Text>
      <Text color="success" font='m' bold>The semanthic of colors</Text>
      <Text color="success" font='l' >The semanthic of colors</Text>
      <Text color="success" font='l' bold>The semanthic of colors</Text>
      <Text color="success" font='xl' >The semanthic of colors</Text>
      <Text color="success" font='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
  {id: '7', title: 'The color specter: info', subtitle: '04/29/2024', description: (
    <VStack max gap="4">
      <Text color="info" font='s' >The semanthic of colors</Text>
      <Text color="info" font='s' bold>The semanthic of colors</Text>
      <Text color="info" font='m' >The semanthic of colors</Text>
      <Text color="info" font='m' bold>The semanthic of colors</Text>
      <Text color="info" font='l' >The semanthic of colors</Text>
      <Text color="info" font='l' bold>The semanthic of colors</Text>
      <Text color="info" font='xl' >The semanthic of colors</Text>
      <Text color="info" font='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
];

export const UITest3 = () => {
  return (
    <VStack max gap="8">
        <HStack max gap="16">
            <ProgressBar 
                max={100}
                value={100}
            />

            <ProgressBar 
                max={100}
                value={100}
                type="vertical"
            />
        </HStack>

        <Tape
            title="Шрифтов завезли!"
            posts={posts}
        />
        <Table
          caption={<Text font='xl' >Online players</Text>}
          heads={[
            {columnId: 'id', columnName: 'ID', width: 50},
            {columnId: 'name', columnName: 'Name', width: 200},
            {columnId: 'rank', columnName: 'Rank', width: 100},
            {columnId: 'score', columnName: 'Score', width: 100},
            {columnId: 'status', columnName: 'Status', width: 175},
            {columnId: 'ping', columnName: 'Ping (ms)', width: 150},
          ]}
          body={onlinePlayers.map<TableBodyRow>(player => 
            [
              {columnId: 'id', content: <Text>{player.id}</Text>},
              {columnId: 'name', content: <Text>{player.nickname}</Text>},
              {columnId: 'rank', content: <Text>{player.rank}</Text>},
              {columnId: 'score', content: <Text>{player.score}</Text>},
              {columnId: 'status', content: <Text>{player.status}</Text>},
              {columnId: 'ping', content: <Text>{player.ping}</Text>},
            ]
          )}
        />
    </VStack>
  );
};