import React, {FC, memo, useState} from 'react'

import {TextField, TextFieldProps} from "ui/components/controls/inputs/TextField";
import {Icon} from "ui/components/shared/Icon";
import MaskText from 'styles/assets/icons/maskText.svg'
import UnmaskText from 'styles/assets/icons/unmaskText.svg'

export const TextFieldPassword: FC<TextFieldProps> = memo(({value, onChange, ...props}) => {
    const [hide, setHide] = useState(false)

    return (
        <TextField
            value={value}
            onChange={onChange}
            type={hide ? 'password' : props.type}
            addonRight={
                <Icon
                    Svg={hide ? MaskText : UnmaskText}
                    clickable onClick={() => setHide(prev => !prev)}
                    fill={'white'}
                />
            }
            {...props}
        />
    )
})
