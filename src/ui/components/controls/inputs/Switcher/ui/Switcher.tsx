import React, { FC } from "react";
import { SwitcherProps } from "../types/SwitcherProps";

import './Switcher.scss'

const Switcher:FC<SwitcherProps> = ({id, value, onChange, disabled}) => {
  
    const rootClasses: string[] = ['Switcher'];
    if(disabled)
        rootClasses.push('disabled');
    
    const inputClasses: string[] = ['Switcher__input'];
        if(value)
        inputClasses.push('Switcher__input__checked');

    return (
        <span className={rootClasses.join(' ')}>
            <input 
                className={inputClasses.join(' ')} 
                type="checkbox" 
                id={id} 
                onClick={onChange}
            />
            <label className="Switcher__label" htmlFor={id}>Toggle</label>
        </span>
    )
};

export default Switcher;