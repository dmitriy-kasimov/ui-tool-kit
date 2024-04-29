import React, {FC, useMemo} from "react"
import { TapeProps } from "../types/TapeProps"
import { Text } from "ui/components/shared/Text"


import cls from './Tape.module.scss'
import { classNames } from "lib/classNames/classNames"
import { HStack, VStack } from "ui/components/shared/Stack"
import Post from "../../Post/ui/Post"

export const Tape: FC<TapeProps> = (props) => {
    
    const {
        title, 
        posts, 
        className = ''
    } = props;

    const items = useMemo(() => {
        return (
            posts.map((post) => 
                <Post 
                    key={post.id}
                    post={post}
                />
            )
        )
    }, [posts])

    return (
        <VStack justify="start" className={classNames(cls.Tape, {}, [className])}>
            <HStack max justify="center" className={cls.header}>
                <Text 
                    font='title'
                    size='subtitle'
                >
                    {title}
                </Text>
            </HStack>
            <VStack gap="8" align="start" className={cls.content}>
                {items}
            </VStack>
        </VStack>
    )
}