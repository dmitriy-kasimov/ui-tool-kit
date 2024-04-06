import React, { FC, memo } from "react";
import { SwitcherProps } from "../types/SwitcherProps";

import cls from './Switcher.module.scss'
import { getValidationClasses, validationStatus } from "ui/components/controls";
import { Mods, classNames } from "lib/classNames/classNames";

const Switcher:FC<SwitcherProps> = memo(({
                                        value, 
                                        onChange, 

                                        id, 
                                        disabled=false, 
                                        valid=validationStatus.DEFAULT,
                                        className=''
                                    }) => {
    
    const mods: Mods = {
        [cls.checked]: value
    }
    return (
        <span className={classNames(cls.Switcher, {[cls.disabled]: disabled}, [className])}>
            <input 
                className={classNames(cls.input, mods, [])} 
                type="checkbox" 
                id={id} 
                onClick={onChange}
            />
            <label className={classNames(cls.label, {}, [getValidationClasses(valid)])} htmlFor={id}>Toggle</label>
        </span>
    )
});

export default Switcher;