import React, {FC, useMemo} from "react"
import { TapeProps } from "../types/TapeProps"
import cls from './Tape.module.scss'
import { classNames } from "lib/classNames/classNames"
import { HStack, VStack } from "ui/components/shared/Stack"
import Post from "../../Post/ui/Post"

export const Tape: FC<TapeProps> = (props) => {
    
    const {
        header, 
        posts, 
        className = '',
        maxHeightContent = '700px',
        maxWidthContent = '600px'
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
               {header}
            </HStack>
            <div  
                className={cls.content} 
                style={{maxHeight: maxHeightContent, maxWidth: maxWidthContent}}
            >
                {items}
            </div>
        </VStack>
    )
}