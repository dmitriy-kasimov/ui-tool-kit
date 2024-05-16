import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Window } from './Window';
import { Skeleton } from 'ui/components/shared/Skeleton/Skeleton';
import { HStack, VStack } from 'ui/components/shared/Stack';
import { Icon } from 'ui/components/shared/Icon';
import { Text } from 'ui/components/shared/Text';
import { Sidebar, SidebarItemType } from 'ui/widgets/Sidebar';

const meta: Meta<typeof Window> = {
    title: 'utils/modal/Window',
    component: Window,
    decorators: [
        (Story) => (
          decoratorBackground(Story)
        )
      ],
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

const sidebarItems: SidebarItemType[] = [
  {desciption: <Text>Link1</Text>, onClick: ()=>{console.log('link 1 has worked!')}},
  {desciption: <Text>Link2</Text>, onClick: ()=>{console.log('link 2 has worked!')}},
  {desciption: <Text>Link3</Text>, onClick: ()=>{console.log('link 3 has worked!')}}
];

export default meta;
type Story = StoryObj<typeof Window>;

export const SmallWithoutSidebar: Story = {
    args: {
        isOpen:true,
       
        content: (
          <VStack gap='l'>
              <Skeleton width={300} height={200}/>
              <Skeleton width={300} height={200}/>
          </VStack>
       )
    },
};

export const SmallWithSidebar: Story = {
  args: {
      isOpen:true,
      sidebar: <Sidebar items={sidebarItems}/>,
      content: (
        <VStack gap='l'>
            <Skeleton width={300} height={200}/>
            <Skeleton width={300} height={200}/>
        </VStack>
     )
  },
};

export const FullscreenWithoutSidebar: Story = {
  args: {
      isOpen:true,
      fullscreen: true,
      content: (
          <VStack gap='l'>
            <HStack gap='l'>
              <VStack gap='l'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
              <VStack gap='l'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
              <VStack gap='l'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
            </HStack>
            
            <HStack gap='l'>
              <VStack gap='l'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
              <VStack gap='l'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
              <VStack gap='l'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
            </HStack>
          </VStack>
      )
  },
};

export const FullscreenWithSidebar: Story = {
  args: {
      isOpen:true,
      fullscreen: true,
      sidebar: <Sidebar items={sidebarItems}/>,
      content: (
          <VStack gap='l'>
            <HStack gap='l'>
              <VStack gap='l'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
              <VStack gap='l'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
              <VStack gap='l'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
            </HStack>
            
            <HStack gap='l'>
              <VStack gap='l'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
              <VStack gap='l'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
              <VStack gap='l'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
            </HStack>
          </VStack>
      )
  },
};