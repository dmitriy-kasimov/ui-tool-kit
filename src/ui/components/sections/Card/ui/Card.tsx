import React, {FC} from "react";
import { CardProps } from "../types/CardProps";
import './Card.scss'
import { classNames } from "lib/classNames/classNames";

export const Card: FC<CardProps> = ({
                                        className = '', 
                                        children
                                    }) => {
    
    return(
        <>
            <div className={classNames('Card', {}, [className])}>
                {children}
            </div>
        </>  
    )
}