import React, {ChangeEvent, FC, TextareaHTMLAttributes, useState} from "react";
import { TextAreaProps } from "../types/TextAreaProps";
import './TextArea.scss'
import { Text, textColor, textSize } from "ui/components/shared/Text";

import { getValidationClasses, validationStatus } from "ui/components/controls";
import { classNames } from "lib/classNames/classNames";

export const TextArea: FC<TextAreaProps> = ({
                                        value,     
                                        onChange,
                                        
                                        label,
                                        limit,
                                        
                                        valid=validationStatus.DEFAULT,
                                        disabled=false,
                                        rows=5,
                                        cols=25,
                                        className='',
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

    return(
        <span className={classNames('TextArea', {disabled}, [className])}>
            <div className={classNames('TextArea__Background', {}, [getValidationClasses(valid)])}>
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