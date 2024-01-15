import React, {FC} from "react";
import './Button.scss'
import { ButtonProps } from "../types/ButtonProps";
import { getValidationClasses, validationStatus } from "ui/components/controls";
import { classNames } from "lib/classNames/classNames";

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        valid=validationStatus.DEFAULT,
        ...otherProps
    } = props;

    return(
        <button 
            type="button"
            className={ classNames('Button', {}, [ className, getValidationClasses(valid) ]) }
            {...otherProps}
        >
            {children}
        </button>
    )
}