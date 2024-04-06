import React, {FC, memo} from "react";
import cls from './Checkbox.module.scss'

import { CheckboxProps } from "../types/CheckboxProps";
import { classNames } from "lib/classNames/classNames";
import { getValidationClasses, validationStatus } from "ui/components/controls";
import { HStack } from "ui/components/shared/Stack";

const Checkbox: FC<CheckboxProps> = memo(({
                                        id, 
                                        checked=false, 
                                        onChange, 
                                        children,
                                        disabled=false,
                                        className='',
                                        valid=validationStatus.DEFAULT
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
            <label htmlFor={id} className={classNames(cls.checkbox, {}, [getValidationClasses(valid)])}></label>
            <label htmlFor={id} className={classNames(cls.label, {}, [])}>
                {children}
            </label>
        </HStack>
        
    )
});

export default Checkbox;