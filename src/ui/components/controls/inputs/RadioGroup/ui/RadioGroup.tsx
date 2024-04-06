import React, {FC, memo} from "react";
import { RadioGroupProps } from "../types/RadioGroupProps";
import RadioGroupOption from "../components/RadioGroupOption/RadioGroupOption";

import cls from './RadioGroup.module.scss'
import { classNames } from "lib/classNames/classNames";
import { getValidationClasses, validationStatus } from "ui/components/controls";
import { VStack } from "ui/components/shared/Stack";
const RadioGroup: FC<RadioGroupProps> = memo(({
                                            onChange,
                                            name, 
                                            options,   
                                            disabled = false,
                                            className='',
                                            valid = validationStatus.DEFAULT
                                        }) => {

    const mods: Record<string, boolean>={
        [cls.disabled]: disabled
    }
    return (
        <VStack gap={'8'} className={classNames(cls.RadioGroup, mods, [getValidationClasses(valid), className])}>
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
            
        </VStack>
    );
});

export default RadioGroup;