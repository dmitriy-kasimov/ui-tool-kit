import React, {FC} from "react"
import { TapeProps } from "../types/TapeProps"
import { Text, textSize } from "ui/components/text/Text"


import './Tape.scss'
import { Post } from "../components/Post" 

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
                        key={post.title}
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