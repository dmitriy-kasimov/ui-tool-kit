import React, {FC, memo} from "react";
import { RadioGroupProps } from "../types/RadioGroupProps";
import RadioGroupOption from "../components/RadioGroupOption/RadioGroupOption";

import './RadioGroup.scss'
import { classNames } from "lib/classNames/classNames";
import { getValidationClasses, validationStatus } from "ui/components/controls";
const RadioGroup: FC<RadioGroupProps> = memo(({
                                            onChange,
                                            name, 
                                            options,   
                                            disabled = false,
                                            className='',
                                            valid = validationStatus.DEFAULT
                                        }) => {

    const mods: Record<string, boolean>={
        disabled
    }
    return (
        <div className={classNames('RadioGroup', mods, [getValidationClasses(valid), className])}>
            {options?.map(option => 
                <RadioGroupOption 
                    key={option.value}
                    name={name}
                    
                    value={option.value}
                    onChange={onChange}
                    
                    id={option.value}
                    description={option.description}

                    disabled={option.disabled}
                    defaultChecked={option.defaultChecked}
                />    
            )}
            
        </div>
    );
});

export default RadioGroup;