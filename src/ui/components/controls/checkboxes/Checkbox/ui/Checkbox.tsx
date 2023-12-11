import React, {FC} from "react";
import './Checkbox.scss'

import { CheckboxProps } from "../types/CheckboxProps";

const Checkbox: FC<CheckboxProps> = ({id, children, ...otherProps}) => {
    return(
        <>
            <input 
                type="checkbox" 
                className="custom-checkbox" 
                id={id} 
                name={id} 
                value="yes"
                {...otherProps}
            />
            <label htmlFor={id}>{children}</label>
        </>
        
    )
}

export default Checkbox;