import React, {FC} from "react";
import './Button.scss'
import { ButtonProps } from "../types/ButtonProps";
import { getValidationClasses, validationStatus } from "ui/components/controls";

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        valid=validationStatus.DEFAULT,
        ...otherProps
    } = props;

    const rootClasses: string[] = ['Button'];
    rootClasses.push(getValidationClasses(valid));
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