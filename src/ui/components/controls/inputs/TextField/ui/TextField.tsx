import React, {ChangeEvent, FC, memo, useState} from "react";
import { TextFieldProps } from "../types/TextFieldProps";
import cls from './TextField.module.scss'
import { Text, textColor, textSize } from "ui/components/shared/Text";

import UnmaskText from "styles/assets/icons/unmaskText.svg"
import MaskText from "styles/assets/icons/maskText.svg"
import { getValidationClasses, validationStatus } from "ui/components/controls";
import { classNames } from "lib/classNames/classNames";
import { Button } from "ui/components/controls/buttons/Button";
import { ButtonTheme } from "ui/components/controls/buttons/Button/types/ButtonProps";
import { HStack, VStack } from "ui/components/shared/Stack";

export const TextField: FC<TextFieldProps> = memo(({
                                        value,     
                                        onChange,
                                        
                                        label,
                                        limit,
                                        
                                        valid=validationStatus.DEFAULT,
                                        disabled=false,
                                        masked = false,
                                        className = '',
                                        ...otherProps
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


    return(
        <HStack 
            align="center"
            className={classNames(cls.background, {disabled}, [className, getValidationClasses(valid)])}
        >
            <VStack className={cls.field}>
                <input 
                    className={cls.input}
                    value={text}
                    onChange={onChangeTextField}
                    type={type} 
                    id={label}
                    placeholder=''
                    autoComplete="off"
                    spellCheck={false}
                    disabled={disabled}
                    {...otherProps}
                />
                <label 
                    className={cls.label}
                    htmlFor={label}
                >
                    <Text>
                        {label}
                    </Text>
                </label>
            </VStack>
            {masked ? (
                <Button 
                    className={cls.btnMask}
                    onClick={switchMask}
                    theme={ButtonTheme.CLEAR}
                    square
                > 
                {
                    <>
                        {
                            type === 'text' ?
                            <MaskText /> :
                            <UnmaskText />
                        }
                    </>
                }
                </Button>
            ) : null}
        </HStack>
    )
});