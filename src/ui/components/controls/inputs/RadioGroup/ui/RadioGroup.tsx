import React, {FC} from "react";
import { RadioGroupProps } from "../types/RadioGroupProps";
import RadioGroupOption from "../components/RadioGroupOption/RadioGroupOption";

import './RadioGroup.scss'
import { classNames } from "lib/classNames/classNames";
const RadioGroup: FC<RadioGroupProps> = ({
                                            onChange,
                                            name, 
                                            options,   
                                            disabled = false,
                                            className=''
                                        }) => {

    const mods: Record<string, boolean>={
        disabled
    }
    return (
        <div className={classNames('RadioGroup', mods, [className])}>
            {options?.map(option => 
                <RadioGroupOption 
                    key={option.value}
                    name={name}
                    
                    value={option.value}
                    onChange={onChange}
                    
                    id={option.value}
                    description={option.description}

                    disabled={option.disabled}
                />    
            )}
            
        </div>
    );
};

export default RadioGroup;