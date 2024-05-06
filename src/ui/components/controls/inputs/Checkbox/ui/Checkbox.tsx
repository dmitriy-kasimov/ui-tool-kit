import React, {FC, memo} from "react";
import cls from './Checkbox.module.scss'

import { CheckboxProps } from "../types/CheckboxProps";
import { classNames } from "lib/classNames/classNames";
import { HStack } from "ui/components/shared/Stack";

const Checkbox: FC<CheckboxProps> = memo(({
                                        id, 
                                        checked=false, 
                                        onChange, 
                                        children,
                                        disabled=false,
                                        className='',
                                    }) => {
   
    return(
        <HStack gap="4" className={classNames('', {}, [className])}>
            <input
                className={classNames(cls.input, {}, [])}
                type="checkbox" 
                id={id} 
                name={id} 
                value="yes"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <label htmlFor={id} className={cls.checkbox}></label>
            <label htmlFor={id} className={cls.label}>
                {children}
            </label>
        </HStack>
        
    )
});

export default Checkbox;