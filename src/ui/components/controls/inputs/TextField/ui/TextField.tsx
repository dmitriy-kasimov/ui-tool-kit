import React, { FC, memo } from 'react'

import cls from './TextField.module.scss'
import { TextFieldProps } from '../model/types/index'
import {Mods, classNames} from "lib/classNames/classNames";
import {HStack} from "ui/components/shared/Stack";

export const TextField: FC<TextFieldProps> = memo(props => {
    const {
        value,
        onChange,

        label,
        placeholder,

        disabled = false,
        readOnly= false,
        addonLeft,
        addonRight,

        className,
        fullWidth = false,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.fullWidth!]: fullWidth,
        [cls.disabled!]: disabled,
        [cls.readonly!]: readOnly
    }

    return (
        <HStack gap={'xs'} className={classNames(cls.wrapper, mods, [className])}>
            {addonLeft}
            <input
                value={value}
                disabled={disabled}
                onChange={e => onChange(e.target.value)}
                className={cls.input}
                placeholder={placeholder}
                {...otherProps}
            />
            {addonRight}
        </HStack>
    )
})
