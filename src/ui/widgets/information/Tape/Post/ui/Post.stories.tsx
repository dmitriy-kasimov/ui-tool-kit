import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Post } from './Post';
import { Text } from 'ui/components/shared/Text';
import { VStack } from 'ui/components/shared/Stack';
import { Skeleton } from 'ui/components/shared/Skeleton';


const meta: Meta<typeof Post> = {
    title: 'widgets/information/Tape/Post',
    component: Post,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {
       
    },
};

export default meta;
type Story = StoryObj<typeof Post>;

export const PostDefault: Story = {
    args: {
       post: {
        id: '228',
        title: '1488',
        subtitle: '???',
        description: (
            <VStack max gap='8' justify='start'>
                <Skeleton width={64} height={64} border='50%'/>
                <Skeleton width={200} height={32} />
                <Skeleton width={300} height={32} />
                <Skeleton width={300} height={32} />
                <Skeleton width={200} height={32} />
            </VStack>
        )
       }
    },
};