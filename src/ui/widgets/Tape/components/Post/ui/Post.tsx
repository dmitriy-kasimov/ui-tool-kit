import React, {FC} from "react"
import { PostProps } from "../types/PostProps"

import './Post.scss'
import { Text, textColor, textSize } from "ui/components/text/Text"

export const Post: FC<PostProps> = ({
                                    id,
                                    title, 
                                    subtitle, 
                                    children
                                    }) => {
    
    return(
        <div className="Post">
            <div className="Post__header">
                <Text 
                    className="Post__header__title"
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
            </div>
            <div className="Post__body">
                {children}
            </div>
        </div>
    )
}

export default Post;