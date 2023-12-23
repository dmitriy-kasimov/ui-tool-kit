import React, {ChangeEvent, FC, useState} from "react";
import { TextFieldProps } from "../types/TextFieldProps";
import './TextField.scss'
import { Text, textColor, textSize } from "ui/components/shared/Text";

import UnmaskText from "styles/assets/icons/unmaskText.svg"
import MaskText from "styles/assets/icons/maskText.svg"
import { getValidationClasses, validationStatus } from "ui/components/controls";

export const TextField: FC<TextFieldProps> = ({
                                        value,     
                                        onChange,
                                        
                                        label,
                                        limit,
                                        
                                        valid=validationStatus.DEFAULT,
                                        disabled=false,
                                        masked = false,
                                    }) => {
    
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>(value);

    const onChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
        const input: string = e.target.value;
        if(input.length <= limit){
            setText(input);
            setCount(input.length)

            onChange(e);
        }
    }

    const [type, setType] = useState<string>(masked ? 'password' : 'text');
    const switchMask = () =>{
        setType( type === 'text' ? 'password' : 'text');
    }


    const rootClasses: string[] = ['TextField'];
    rootClasses.push(getValidationClasses(valid));
    
    if(disabled)
        rootClasses.push('disabled');

    const inputBackgroundClasses: string[] = ['TextField__Background'];
    inputBackgroundClasses.push(getValidationClasses(valid));

    return(
        <span className={rootClasses.join(' ')}>
            <div className={inputBackgroundClasses.join(' ')}>
                <div className="TextField__Background__Field">
                    <input 
                        className="TextField__Background__Field__input" 
                        value={text}
                        onChange={onChangeTextField}
                        type={type} 
                        id={label}
                        placeholder=''
                        autoComplete="off"
                        spellCheck={false}
                        disabled={disabled}
                    />
                    <label 
                        className="TextField__Background__Field__label" 
                        htmlFor={label}
                    >
                        <Text>
                            {label}
                        </Text>
                    </label>
                </div>
                <button 
                    className="TextField__Background__SwitcherMask"
                    onClick={switchMask}
                > 
                {
                    masked 
                    ?
                        <>
                            {
                                type === 'text' 
                                    ?
                                <MaskText />
                                    :
                                <UnmaskText />
                            }
                        </>
                    :
                        <>
                        </>
                }
                </button>
            </div>

            <span 
                className="TextField__counter"
            >
                <Text size={textSize.REGULARSMALL} color={textColor.SECONDARY}>{count} / {limit}</Text>
            </span>
        </span>
    )
}

/*
            <div className="TextField__Background__SwitcherMask">
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
*/