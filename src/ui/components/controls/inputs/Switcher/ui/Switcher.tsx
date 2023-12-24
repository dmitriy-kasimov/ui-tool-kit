import React, { FC } from "react";
import { SwitcherProps } from "../types/SwitcherProps";

import './Switcher.scss'
import { getValidationClasses, validationStatus } from "ui/components/controls";

const Switcher:FC<SwitcherProps> = ({
                                        id, 
                                        value, 
                                        onChange, 
                                        disabled, 
                                        valid=validationStatus.DEFAULT
                                    }) => {
  
    const rootClasses: string[] = ['Switcher'];
    if(disabled)
        rootClasses.push('disabled');
    
    const inputClasses: string[] = ['Switcher__input'];
        if(value)
            inputClasses.push('Switcher__input__checked');

    const labelClasses: string[] = ['Switcher__label'];
    labelClasses.push(getValidationClasses(valid));

    return (
        <span className={rootClasses.join(' ')}>
            <input 
                className={inputClasses.join(' ')} 
                type="checkbox" 
                id={id} 
                onClick={onChange}
            />
            <label className={labelClasses.join(' ')} htmlFor={id}>Toggle</label>
        </span>
    )
};

export default Switcher;