import React, {FC} from "react";
import { RadioGroupProps } from "../types/RadioGroupProps";
import RadioGroupOption from "../components/RadioGroupOption/RadioGroupOption";

import './RadioGroup.scss'
const RadioGroup: FC<RadioGroupProps> = ({
                                            onChange,
                                            name, 
                                            options,   
                                            disabled = false,
                                        }) => {
    
    const rootClasses: string[] = ['RadioGroup'];
    if(disabled)
        rootClasses.push('disabled');
    return (
        <div className={rootClasses.join(' ')}>
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