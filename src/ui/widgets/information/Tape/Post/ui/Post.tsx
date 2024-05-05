import React, {FC} from "react"
import { PostProps } from "../types/PostProps"

import cls from './Post.module.scss'
import { Text } from "ui/components/shared/Text"
import { classNames } from "lib/classNames/classNames"
import { HStack, VStack } from "ui/components/shared/Stack"

export const Post: FC<PostProps> = (props) => {
    
    const {
        post,                          
        className=''
    } = props;

    return(
        <VStack className={classNames(cls.Post, {}, [className])}>
            <HStack max justify="between" align="end" className={cls.header}>
                <Text font="l">
                    {post.title}
                </Text>
                <Text color='secondary'>
                    {post.subtitle}
                </Text>
            </HStack>
            <div className={cls.body}>
                {post.description}
            </div>
        </VStack>
    )
}

export default Post;