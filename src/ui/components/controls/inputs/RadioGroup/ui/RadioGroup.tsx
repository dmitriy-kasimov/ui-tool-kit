import React, {FC, memo} from "react";
import { RadioGroupProps } from "../types/RadioGroupProps";
import RadioGroupOption from "../components/RadioGroupOption/RadioGroupOption";

import cls from './RadioGroup.module.scss'
import { classNames } from "lib/classNames/classNames";
import { VStack } from "ui/components/shared/Stack";
const RadioGroup: FC<RadioGroupProps> = memo(({
                                            onChange,
                                            options,   
                                            disabled = false,
                                            className='',
                                            name,
                                        }) => {

    const mods: Record<string, boolean>={
        [cls.disabled]: disabled
    }
    return (
        <VStack gap={'8'} className={classNames(cls.RadioGroup, mods, [className])}>
            {options?.map(option => 
                <RadioGroupOption 
                    key={option.value}
                    id={option.value}
                    item={option}
                    name={name}
                   
                    onChange={onChange} 
                />    
            )}
            
        </VStack>
    );
});

export default RadioGroup;