import React, {FC, memo,  useMemo} from "react";
import cls from './Button.module.scss'
import { ButtonProps, ButtonTheme } from "../types/ButtonProps";
import { getValidationClasses, validationStatus } from "ui/components/controls";
import { Mods, classNames } from "lib/classNames/classNames";

export const Button: FC<ButtonProps> = memo((props) => {
    const {
        children,
        square=false,
        disabled=false,
        theme = ButtonTheme.PRIMARY,
        fullWidth = false,
        className = '',
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.fullWidth]: fullWidth,
        [cls.disabled]: disabled,
        [cls.square]: square,
    }
    return(
        <button 
            className={ classNames(cls.Button, mods, [className])}
            type="button"
            {...otherProps}
        >
            {children}
        </button>
    )
});