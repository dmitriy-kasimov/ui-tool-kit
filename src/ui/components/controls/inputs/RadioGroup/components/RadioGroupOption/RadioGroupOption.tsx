import React, {FC} from "react";
import { RadioGroupOptionProps } from "./types/RadioGroupOptionProps";
import { Text } from "ui/components/shared/Text";

import './RadioGroupOption.scss'

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
    <span>
            <input
                className="RadioGroup__input" 
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
    </span>
  )
};

export default RadioGroupOption;