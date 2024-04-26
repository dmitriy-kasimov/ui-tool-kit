import React, {FC, memo} from "react";
import { TextProps, textColor, textFont, textSize } from "../types/TextProps";
import cls from'../styles/Text.module.scss'
import { Mods, classNames } from "lib/classNames/classNames";

export const Text: FC<TextProps> = memo((props) => {
    const {
        size='regular', 
        color='main',  
        font='main', 

        className='',

        children,
    } = props;

    return (
        <span className={classNames(cls.Text, {}, [
            cls[font], 
            cls[size], 
            cls[color], 
            className
        ])}>
            {children}
        </span>
    )
});