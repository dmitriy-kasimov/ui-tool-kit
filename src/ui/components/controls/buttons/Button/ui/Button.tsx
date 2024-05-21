import React, {FC, ForwardedRef, forwardRef, memo} from "react";
import cls from './Button.module.scss'
import { ButtonPadding, ButtonProps } from "../types/ButtonProps";
import { Mods, classNames } from "lib/classNames/classNames";

const mapPaddingToClass: Record<ButtonPadding, string> = {
    '0': 'padding_0',
    'xxs': 'padding_xxs',
    'xs': 'padding_xs',
    's': 'padding_s',
    'm': 'padding_m',
    'l': 'padding_l',
    'xl': 'padding_xl',
};

export const Button: FC<ButtonProps> = forwardRef((props, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        children,
        square=false,
        disabled=false,
        variant = 'primary',
        fullWidth = false,
        className = '',
        addonLeft,
        addonRight,
        padding = 's',
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.fullWidth]: fullWidth,
        [cls.disabled]: disabled,
        [cls.square]: square,
        [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    }

    const paddingClass = mapPaddingToClass[padding];

    return(
        <button 
            className={ classNames(cls.Button, mods, [className, cls[variant], cls[paddingClass]])}
            type="button"
            {...otherProps}
            ref={ref}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    )
});