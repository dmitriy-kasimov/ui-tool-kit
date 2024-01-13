import React, {ChangeEvent, FC, TextareaHTMLAttributes, useState} from "react";
import { TextAreaProps } from "../types/TextAreaProps";
import './TextArea.scss'
import { Text, textColor, textSize } from "ui/components/shared/Text";

import { getValidationClasses, validationStatus } from "ui/components/controls";

export const TextArea: FC<TextAreaProps> = ({
                                        value,     
                                        onChange,
                                        
                                        label,
                                        limit,
                                        
                                        valid=validationStatus.DEFAULT,
                                        disabled=false,
                                        rows=5,
                                        cols=25,
                                        ...otherProps
                                    }) => {
    
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>(value);

    const onChangeTextField = (e:any) => {
        const input: string  = e.target.value;
        if(input.length <= limit){
            setText(input);
            setCount(input.length)

            onChange(e);
        }
    }

    const rootClasses: string[] = ['TextArea'];
    rootClasses.push(getValidationClasses(valid));
    
    if(disabled)
        rootClasses.push('disabled');

    const inputBackgroundClasses: string[] = ['TextArea__Background'];
    inputBackgroundClasses.push(getValidationClasses(valid));

    return(
        <span className={rootClasses.join(' ')}>
            <div className={inputBackgroundClasses.join(' ')}>
                <div className="TextArea__Background__Field">
                    <textarea 
                        className="TextArea__Background__Field__input" 
                        value={text}
                        onChange={onChangeTextField}
                        rows={rows}
                        cols={cols}
                        id={label}
                        placeholder=''
                        autoComplete="off"
                        spellCheck={false}
                        disabled={disabled}
                        {...otherProps}
                    />
                    <label 
                        className="TextArea__Background__Field__label" 
                        htmlFor={label}
                    >
                        <Text>
                            {label}
                        </Text>
                    </label>
                </div>
            </div>

            <span 
                className="TextArea__counter"
            >
                <Text size={textSize.REGULARSMALL} color={textColor.SECONDARY}>{count} / {limit}</Text>
            </span>
        </span>
    )
}