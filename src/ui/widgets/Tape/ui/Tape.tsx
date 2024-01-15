import React, {FC} from "react"
import { TapeProps } from "../types/TapeProps"
import { Text, textFont, textSize } from "ui/components/shared/Text"


import './Tape.scss'
import { Post } from "../components/Post" 
import { classNames } from "lib/classNames/classNames"

const Tape: FC<TapeProps> = ({title, posts, className=''}) => {
    return (
        <div className={classNames('Tape', {}, [className])}>
            <span className="Tape__header">
                <Text 
                    font={textFont.TITLE}
                    size={textSize.SUBTITLE}
                >
                    {title}
                </Text>
            </span>
            <div className="Tape__content">
                {
                    posts.map(post => 
                    <Post
                        id={post.id}
                        key={post.id}
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