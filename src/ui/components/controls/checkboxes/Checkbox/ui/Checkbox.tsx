import React, {FC} from "react";
import './Checkbox.scss'

import { CheckboxProps } from "../types/CheckboxProps";

const Checkbox: FC<CheckboxProps> = ({
                                        id, 
                                        checked=false, 
                                        onChange, 
                                        children,
                                        disabled=false
                                        
                                    }) => {

    return(
        <>
            <input 
                type="checkbox" 
                className="custom-checkbox" 
                id={id} 
                name={id} 
                value="yes"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <label htmlFor={id}>{children}</label>
        </>
        
    )
}

export default Checkbox;