import React, {FC} from "react";
import './Checkbox.scss'

import { CheckboxProps } from "../types/CheckboxProps";
import { classNames } from "lib/classNames/classNames";
import { getValidationClasses, validationStatus } from "ui/components/controls";

const Checkbox: FC<CheckboxProps> = ({
                                        id, 
                                        checked=false, 
                                        onChange, 
                                        children,
                                        disabled=false,
                                        className='',
                                        valid=validationStatus.DEFAULT
                                    }) => {
   
    return(
        <span className={classNames('CheckBox', {}, [className])}>
            <input
                className={classNames('CheckBox__input', {}, [])}
                type="checkbox" 
                id={id} 
                name={id} 
                value="yes"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <label htmlFor={id} className={classNames('CheckBox__checkbox', {}, [getValidationClasses(valid)])}></label>
            <label htmlFor={id} className={classNames('CheckBox__label', {}, [])}>
                {children}
            </label>
        </span>
        
    )
}

export default Checkbox;