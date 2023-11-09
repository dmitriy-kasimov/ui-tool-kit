import React, {FC} from "react";
import './Button.scss'
import { ButtonProps, buttonVariant } from "../types/ButtonProps";

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        variant = buttonVariant.OUTLINE, 
        children,
        ...otherProps
    } = props;

    const rootClasses: string[] = ['Button'];
    rootClasses.push(className);        

    switch (variant) {
        case buttonVariant.PRIMARY:
            rootClasses.push('ButtonPrimary');
            break;
        case buttonVariant.OUTLINE:
            rootClasses.push('ButtonOutline');
            break;
        default:
            rootClasses.push('ButtonPrimary');
            break;
    }
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