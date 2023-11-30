import React, {FC} from "react"
import { TapeProps } from "../types/TapeProps"
import { Text, textSize } from "ui/components/text/Text"


import './Tape.scss'
import { Post } from "ui/components/panels/Post"

const Tape: FC<TapeProps> = ({title, posts}) => {
    return (
        <div className="Tape">
            <span className="Tape__header">
                <Text size={textSize.SUBTITLE}>{title}</Text>
            </span>
            <div className="Tape__content">
                {
                    posts.map(post => 
                    <Post 
                        title={post.title} 
                        subtitle={post.subtitle}
                    >
                        {post.children}
                    </Post>)
                }
            </div>
        </div>
    )
}

export default Tape;