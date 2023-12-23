import React, {FC} from "react";
import { CardProps } from "../types/CardProps";
import './Card.scss'

export const Card: FC<CardProps> = ({
                                        className = '', 
                                        children
                                    }) => {
    
    const rootClasses: string[] = ['Card'];
    rootClasses.push(className);
    
    return(
        <>
            <div className={rootClasses.join(' ')}>
                {children}
            </div>
        </>  
    )
}