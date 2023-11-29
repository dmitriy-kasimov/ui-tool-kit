import React, {FC} from "react";
import './Button.scss'
import { ButtonProps } from "../types/ButtonProps";

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        ...otherProps
    } = props;

    const rootClasses: string[] = ['Button'];
    rootClasses.push(className);        

    return(
        <button 
            type="button"
            className={rootClasses.join(' ')}
            {...otherProps}
        >
            {children}
        </button>
    )
}