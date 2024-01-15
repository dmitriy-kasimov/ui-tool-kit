import React, {FC} from "react";
import './Checkbox.scss'

import { CheckboxProps } from "../types/CheckboxProps";
import { classNames } from "lib/classNames/classNames";

const Checkbox: FC<CheckboxProps> = ({
                                        id, 
                                        checked=false, 
                                        onChange, 
                                        children,
                                        disabled=false,
                                        className=''
                                    }) => {
   
    return(
        <span>
            <input
                className={classNames('Checkbox__input', {}, [className])}
                type="checkbox" 
                id={id} 
                name={id} 
                value="yes"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <label htmlFor={id} className='checkbox__label'>{children}</label>
        </span>
        
    )
}

export default Checkbox;