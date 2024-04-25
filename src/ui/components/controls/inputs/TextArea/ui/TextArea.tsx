import React, {ChangeEvent, FC, TextareaHTMLAttributes, memo, useState} from "react";
import { TextAreaProps } from "../types/TextAreaProps";
import cls from './TextArea.module.scss'
import { Text, textColor, textSize } from "ui/components/shared/Text";

import { getValidationClasses, validationStatus } from "ui/components/controls";
import { classNames } from "lib/classNames/classNames";

export const TextArea: FC<TextAreaProps> = memo(props => {
    
    const {
        value,     
        onChange,
        
        label,
        limit,
        
        valid=validationStatus.DEFAULT,
        disabled=false,
        rows=5,
        cols=25,
        className='',
        ...otherProps
    } = props;

    return(
        <div className={classNames(cls.field, {[cls.disabled]: disabled}, [className, getValidationClasses(valid)])}>
            <textarea 
                className={cls.input}
                value={value}
                onChange={e => onChange(e.target.value)}
                rows={rows}
                cols={cols}
                id={label}
                placeholder=''
                autoComplete="off"
                spellCheck={false}
                disabled={disabled}
                {...otherProps}
            />
            <label 
                className={cls.label} 
                htmlFor={label}
            >
                <Text>
                    {label}
                </Text>
            </label>
        </div>
    )
});