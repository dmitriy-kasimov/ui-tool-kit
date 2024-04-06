import React, {FC} from "react";
import { RadioGroupOptionProps } from "./types/RadioGroupOptionProps";
import { Text } from "ui/components/shared/Text";

import cls from './RadioGroupOption.module.scss'
import { HStack } from "ui/components/shared/Stack";

const RadioGroupOption: FC<RadioGroupOptionProps> = ({
                                                        value,
                                                        onChange,
                                                        id,
                                                        name,
                                                        description,
                                                        disabled,
                                                        defaultChecked=false
                                                    }) => {
  return (
    <HStack gap="16" >
        <input
            className={cls.input} 
            type="radio" 
            value={value}
            onChange={onChange}
            id={id}
            name={name}
            disabled={disabled}
            defaultChecked={defaultChecked}
        />
        <label 
            htmlFor={id}
        >
            <Text>{description}</Text>
        </label>
    </HStack>
  )
};

export default RadioGroupOption;