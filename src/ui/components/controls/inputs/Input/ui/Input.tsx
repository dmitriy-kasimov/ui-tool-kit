import React, {ChangeEvent, FC, useState} from "react";
import { InputProps } from "../types/InputProps";
import './Input.scss'
import { Text, textSize } from "ui/components/shared/text/Text";

import UnmaskText from "styles/assets/icons/unmaskText.svg"
import MaskText from "styles/assets/icons/maskText.svg"

export const Input: FC<InputProps> = ({
                                        label,
                                        limit,

                                        defaultValue='',
                                        disabled=false,
                                        masked = false,
                                    }) => {
    
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>(defaultValue);

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


    const rootClasses: string[] = ['Input'];
    console.log(disabled);
    if(disabled)
        rootClasses.push('disabled');
    return(
        <span className={rootClasses.join(' ')}>
            <div className="Input__Background">
                <div className="Input__Background__Field">
                    <input 
                        className="Input__Background__Field__input" 
                        value={text}
                        onChange={onChangeInput}
                        type={type} 
                        id={label}
                        placeholder=''
                        autoComplete="off"
                        spellCheck={false}
                        disabled={disabled}
                    />
                    <label 
                        className="Input__Background__Field__label" 
                        htmlFor={label}
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