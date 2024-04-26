import React, {FC} from "react"
import { PostProps } from "../types/PostProps"

import cls from './Post.module.scss'
import { Text, textColor, textSize } from "ui/components/shared/Text"
import { classNames } from "lib/classNames/classNames"
import { HStack, VStack } from "ui/components/shared/Stack"

export const Post: FC<PostProps> = ({
                                    id,
                                    title, 
                                    subtitle, 
                                    children,
                                    className=''
                                    }) => {
    
    return(
        <VStack max className={classNames(cls.Post, {}, [className])}>
            <HStack max justify="between" align="end" className={cls.header}>
                <Text 
                    size='important'
                >
                    {title}
                </Text>
                <Text 
                    size='regularsmall' 
                    color='secondary'
                >
                    {subtitle}
                </Text>
            </HStack>
            <div className={cls.body}>
                {children}
            </div>
        </VStack>
    )
}

export default Post;