import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Window } from './Window';
import { Skeleton } from 'ui/components/shared/Skeleton/Skeleton';
import { HStack, VStack } from 'ui/components/shared/Stack';
import TestIcon from 'styles/assets/icons/success.svg'

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

export default meta;
type Story = StoryObj<typeof Window>;

export const SmallWithoutSidebar: Story = {
    args: {
        isOpen:true,
       
        content: (
          <VStack gap='32'>
              <Skeleton width={300} height={200}/>
              <Skeleton width={300} height={200}/>
          </VStack>
       )
    },
};

export const SmallWithSidebar: Story = {
  args: {
      isOpen:true,
      sidebar: [
        {Icon: (TestIcon), desciption: 'Link 1', onClick: ()=>{console.log('link 1 has worked!')}},
        {Icon: (TestIcon), desciption: 'Link 2', onClick: ()=>{console.log('link 2 has worked!')}},
        {Icon: (TestIcon), desciption: 'Link 3', onClick: ()=>{console.log('link 3 has worked!')}}
      ],
      content: (
        <VStack gap='32'>
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
          <VStack gap='32'>
            <HStack gap='32'>
              <VStack gap='32'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
              <VStack gap='32'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
              <VStack gap='32'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
            </HStack>
            
            <HStack gap='32'>
              <VStack gap='32'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
              <VStack gap='32'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
              <VStack gap='32'>
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
      sidebar: [
        {Icon: (TestIcon), desciption: 'Link 1', onClick: ()=>{console.log('link 1 has worked!')}},
        {Icon: (TestIcon), desciption: 'Link 2', onClick: ()=>{console.log('link 2 has worked!')}},
        {Icon: (TestIcon), desciption: 'Link 3', onClick: ()=>{console.log('link 3 has worked!')}}
      ],
      content: (
          <VStack gap='32'>
            <HStack gap='32'>
              <VStack gap='32'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
              <VStack gap='32'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
              <VStack gap='32'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
            </HStack>
            
            <HStack gap='32'>
              <VStack gap='32'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
              <VStack gap='32'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
              <VStack gap='32'>
                  <Skeleton width={300} height={200}/>
                  <Skeleton width={300} height={200}/>
              </VStack>
            </HStack>
          </VStack>
      )
  },
};