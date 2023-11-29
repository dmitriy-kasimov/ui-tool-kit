import React, {FC} from "react";
import './Checkbox.scss'

import { CheckboxProps } from "../types/CheckboxProps";

const Checkbox: FC<CheckboxProps> = ({children}) => {
    return(
        // <span className="Checkbox">
        //     <input 
        //         className="Checkbox__box"
        //         type="checkbox"
        //     />
        //     {children}
        // </span>

        <>
            <input type="checkbox" className="custom-checkbox" id="happy" name="happy" value="yes"/>
            <label htmlFor="happy">{children}</label>
        </>
        
    )
}

export default Checkbox;