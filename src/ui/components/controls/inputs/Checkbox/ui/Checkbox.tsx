import React, {FC} from "react";
import './Checkbox.scss'

import { CheckboxProps } from "../types/CheckboxProps";

const Checkbox: FC<CheckboxProps> = ({
                                        id, 
                                        checked=false, 
                                        onChange, 
                                        children,
                                        disabled=false,

                                    }) => {
   
    return(
        <span>
            <input
                className='Checkbox__input'
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