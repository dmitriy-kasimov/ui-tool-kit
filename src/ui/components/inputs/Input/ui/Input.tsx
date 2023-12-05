import React, {ChangeEvent, FC, useState} from "react";
import { InputProps } from "../types/InputProps";
import './Input.scss'
import { Text, textSize } from "ui/components/text/Text";
import { Button } from "ui/components/buttons/Button";

import UnmaskText from "styles/assets/icons/unmaskText.svg"
import MaskText from "styles/assets/icons/maskText.svg"

export const Input: FC<InputProps> = ({
                                        label,
                                        limit,
                                        masked = false,

                                        id='text',
                                    }) => {
    
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>('');

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const input: string = e.target.value;
        if(input.length < limit){
            setText(input);
        }
        setCount(input.length)
    }

    const [type, setType] = useState<string>(masked ? 'password' : 'text');
    const switchMask = () =>{
        setType( type === 'text' ? 'password' : 'text');
    }

    return(
        <span className="Input">
            <div className="Input__Background">
                <div className="Input__Background__Field">
                    <input 
                        className="Input__Background__Field__input" 
                        value={text}
                        onChange={onChangeInput}
                        type={type} 
                        id={id}
                        placeholder=''
                        autoComplete="off"
                        spellCheck={false}
                    />
                    <label 
                        className="Input__Background__Field__label" 
                        htmlFor={id}
                    >
                        <Text>
                            {label}
                        </Text>
                    </label>
                </div>
                <div className="Input__Background__SwitcherMask">
                {
                    masked 
                    ?
                        <div
                            className="SwitcherMask" 
                            onClick={switchMask}
                        >
                            {
                                type === 'text' 
                                    ?
                                <MaskText />
                                    :
                                <UnmaskText scale={1.5}/>
                            }
                        </div>
                    :
                        <>
                        </>
                }
                </div>
            </div>

            <span 
                className="Input__counter"
            >
                <Text size={textSize.REGULARSMALL}>{count} / {limit}</Text>
            </span>
        </span>
    )
}