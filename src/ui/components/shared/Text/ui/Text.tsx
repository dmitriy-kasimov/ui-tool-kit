import React, {FC, memo} from "react";
import { TextProps } from "../types/TextProps";
import cls from'./styles/Text.module.scss'
import { classNames } from "lib/classNames/classNames";

export const Text: FC<TextProps> = memo((props) => {
    const {
        color='main',  
        font='m', 
        className='',
        bold=false,

        children,
    } = props;

    return (
        <span className={classNames(cls.Text, {[cls.bold]: bold}, [
            cls[font], 
            cls[color], 
            className
        ])}>
            {children}
        </span>
    )
});