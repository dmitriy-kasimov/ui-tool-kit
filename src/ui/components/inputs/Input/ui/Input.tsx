import React, {ChangeEvent, FC, useState} from "react";
import { InputProps } from "../types/InputProps";
import './Input.scss'
import { Text, textSize } from "ui/components/text/Text";
import { Button } from "ui/components/buttons/Button";


export const Input: FC<InputProps> = ({
                                        label,
                                        limit,
                                        masked = false,

                                        type='text',
                                        id='text',
                                    }) =>{
    
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input: string = e.target.value;
        if(input.length < limit){
            setText(input);
        }
        setCount(input.length)
    }

    return(
        <div className="Input">
            <div className="text-field text-field_floating">
                <input 
                    className="text-field__input" 
                    value={text}
                    onChange={onChange}
                    type={type} 
                    id={id}
                    placeholder=''
                />
                <label 
                    className="text-field__label" 
                    htmlFor={id}
                >
                    <Text>
                        {label}
                    </Text>
                </label>
                <span 
                    className="text-field__counter"
                >
                    <Text size={textSize.REGULARSMALL}>{count} / {limit}</Text>
                </span>
            </div>
            <Button className="InputMask">
                123
            </Button>
        </div>
       
    )
}