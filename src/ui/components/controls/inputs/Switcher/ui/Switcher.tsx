import React, { FC, memo } from "react";
import { SwitcherProps } from "../types/SwitcherProps";

import './Switcher.scss'
import { getValidationClasses, validationStatus } from "ui/components/controls";
import { classNames } from "lib/classNames/classNames";

const Switcher:FC<SwitcherProps> = memo(({
                                        id, 
                                        value, 
                                        onChange, 
                                        disabled=false, 
                                        valid=validationStatus.DEFAULT,
                                        className=''
                                    }) => {
                            
    const mods: Record<string, boolean> = {
        value
    }

    return (
        <span className={classNames('Switcher', {disabled}, [className])}>
            <input 
                className={classNames('Switcher__input', {Switcher__input__checked: value})} 
                type="checkbox" 
                id={id} 
                onClick={onChange}
            />
            <label className={classNames('Switcher__label', {}, [getValidationClasses(valid)])} htmlFor={id}>Toggle</label>
        </span>
    )
});

export default Switcher;