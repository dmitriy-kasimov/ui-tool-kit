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
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.fullWidth]: fullWidth,
        [cls.disabled]: disabled,
        [cls.square]: square,
        [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    }
    return(
        <button 
            className={ classNames(cls.Button, mods, [className, cls[variant]])}
            type="button"
            {...otherProps}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    )
});