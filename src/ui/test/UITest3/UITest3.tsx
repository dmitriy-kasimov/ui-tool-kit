
import React from "react";
import { memo } from "react";
import { Skeleton } from "ui/components/shared/Skeleton/Skeleton";
import { HStack, VStack } from "ui/components/shared/Stack";
import { Text, textColor, textFont, textSize } from "ui/components/shared/Text";
import { Disclosure } from "ui/widgets/information/Disclousure/Disclosure";
import { ProgressBar } from "ui/widgets/information/ProgressBar";
import { Table } from "ui/widgets/information/Table";
import { TableBody } from "ui/widgets/information/Table/components/TableBody";
import { TableCaption } from "ui/widgets/information/Table/components/TableCaption";
import { TableContent } from "ui/widgets/information/Table/components/TableContent";
import { TableData } from "ui/widgets/information/Table/components/TableData";
import { TableHead } from "ui/widgets/information/Table/components/TableHead";
import { TableRow } from "ui/widgets/information/Table/components/TableRow";
import { Tape } from "ui/widgets/information/Tape";
import { Post } from "ui/widgets/information/Tape/components/Post";

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

export const UITest3 = () => {
  return (
    <VStack max gap="8">
        <Disclosure
            items={[
                {
                  title: (<Text>The rule #1</Text>), 
                  description: (<Text>Sometnhing very looooooooooooooooong </Text>),
                },
                {
                  title: (<Text>The rule #2 [main rule]</Text>), 
                  description: (<VStack gap='8' max>
                    <Skeleton width={150} height={40}/>
                    <Skeleton width={250} height={30}/>
                    <Skeleton width={250} height={30}/>
                    <Skeleton width={250} height={250}/>
                    <Skeleton width={250} height={30}/>
                  </VStack>),
                }
              ]}
        />

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
            title="Новые шрифты!"
        >
            <Post
                title="Roboto для заголовков!"
                subtitle={'04/24/24'}
                id={1}
            >
                <VStack max gap="4">
                <Text font='title' size='title'>Шрифт Roboto для заголовоков, размер: TITLE</Text>
                <Text font='title' size='subtitle'>Шрифт Roboto для заголовоков, размер: SUBTITLE</Text>
                <Text font='title' size='important'>Шрифт Roboto для заголовоков, размер: IMPORTANT</Text>
                <Text font='title' size='regular'>Шрифт Roboto для заголовоков, размер: REGULAR</Text>
                <Text font='title' size='regularsmall'>Шрифт Roboto для заголовоков, размер: REGULARSMALL</Text>

            
                <Text font='title' color='main'>Шрифт Roboto для заголовоков, тема: основной</Text>
                <Text font='title' color='secondary'>Шрифт Roboto для заголовоков, тема: второстепенный</Text>
                <Text font='title' color='warning'>Шрифт Roboto для заголовоков, тема: предупреждение</Text>
                <Text font='title' color='error'>Шрифт Roboto для заголовоков, тема: ошибка</Text>
                <Text font='title' color='success'>Шрифт Roboto для заголовоков, тема: успешно выполнено</Text>
                <Text font='title' color='info'>Шрифт Roboto для заголовоков, тема: информация</Text>
                </VStack>
            </Post>

            <Post
                title="Roboto основной!"
                subtitle={'04/24/24'}
                id={1}
            >
                <VStack max gap="4">
                <Text font='main' size='title'>Шрифт Roboto основной, размер: TITLE</Text>
                <Text font='main' size='subtitle'>Шрифт Roboto основной, размер: SUBTITLE</Text>
                <Text font='main' size='important'>Шрифт Roboto основной, размер: IMPORTANT</Text>
                <Text font='main' size='regular'>Шрифт Roboto основной, размер: REGULAR</Text>
                <Text font='main' size='regularsmall'>Шрифт Roboto для заголовоков, размер: REGULARSMALL</Text>
            
                <Text font='main' color='main'>Шрифт Roboto основной, тема: основной</Text>
                <Text font='main' color='secondary'>Шрифт Roboto основной, тема: второстепенный</Text>
                <Text font='main' color='warning'>Шрифт Roboto основной, тема: предупреждение</Text>
                <Text font='main' color='error'>Шрифт Roboto основной, тема: ошибка</Text>
                <Text font='main' color='success'>Шрифт Roboto основной, тема: успешно выполнено</Text>
                <Text font='main' color='info'>Шрифт Roboto основной, тема: информация</Text>
                </VStack>
            </Post>
        </Tape>

        <Table>
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
        </Table>
    </VStack>
  );
};