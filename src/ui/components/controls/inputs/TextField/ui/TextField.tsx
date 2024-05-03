import React, {ChangeEvent, FC, memo, useState} from "react";
import { TextFieldProps } from "../types/TextFieldProps";
import cls from './TextField.module.scss'
import { Text } from "ui/components/shared/Text";

import UnmaskText from "styles/assets/icons/unmaskText.svg"
import MaskText from "styles/assets/icons/maskText.svg"
import { getValidationClasses, validationStatus } from "ui/components/controls";
import { classNames } from "lib/classNames/classNames";
import { Button } from "ui/components/controls/buttons/Button";
import { HStack, VStack } from "ui/components/shared/Stack";
import { Icon } from "ui/components/shared/Icon";

export const TextField: FC<TextFieldProps> = memo(props => {
    
    const {
        value,     
        onChange,
        
        label,
        limit,
        
        valid=validationStatus.DEFAULT,
        disabled=false,
        masked = false,
        className = '',
        ...otherProps
    } = props;

    const [type, setType] = useState<string>(masked ? 'password' : 'text');
    const switchMask = () =>{
        setType( type === 'text' ? 'password' : 'text');
    }

    return(
        <HStack 
            justify="between"
            align="center"
            className={classNames(cls.background, {[cls.disabled]: disabled}, [className, getValidationClasses(valid)])}
        >
            <VStack className={cls.field}>
                <input 
                    className={cls.input}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    type={type} 
                    maxLength={limit}
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
                    onClick={switchMask}
                    variant='clear'
                    square
                > 
                {
                    <>
                        {
                            type === 'text' ?
                            <Icon Svg={MaskText} width={32} height={32} fill={'rgb(230, 230, 230)'}/> :
                            <Icon Svg={UnmaskText} width={32} height={32} fill={'rgb(230, 230, 230)'}/>
                        }
                    </>
                }
                </Button>
            ) : null}
        </HStack>
    )
});