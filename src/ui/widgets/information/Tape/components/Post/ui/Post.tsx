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
                    size={textSize.IMPORTANT}
                >
                    {title}
                </Text>
                <Text 
                    size={textSize.REGULARSMALL} 
                    color={textColor.SECONDARY}
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