import React, {FC, memo} from "react";
import cls from './Button.module.scss'
import { ButtonProps } from "../types/ButtonProps";
import { Mods, classNames } from "lib/classNames/classNames";

export const Button: FC<ButtonProps> = memo((props) => {
    const {
        children,
        square=false,
        disabled=false,
        variant = 'primary',
        fullWidth = false,
        className = '',
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.fullWidth]: fullWidth,
        [cls.disabled]: disabled,
        [cls.square]: square,
    }
    return(
        <button 
            className={ classNames(cls.Button, mods, [className, cls[variant]])}
            type="button"
            {...otherProps}
        >
            {children}
        </button>
    )
});