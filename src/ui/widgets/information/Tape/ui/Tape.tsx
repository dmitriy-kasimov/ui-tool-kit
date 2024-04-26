import React, {FC} from "react"
import { TapeProps } from "../types/TapeProps"
import { Text, textFont, textSize } from "ui/components/shared/Text"


import cls from './Tape.module.scss'
import { classNames } from "lib/classNames/classNames"
import { HStack, VStack } from "ui/components/shared/Stack"

const Tape: FC<TapeProps> = ({title, children, className=''}) => {
    return (
        <VStack justify="start" className={classNames(cls.Tape, {}, [className])}>
            <HStack max justify="center" className={cls.header}>
                <Text 
                    font='title'
                    size='subtitle'
                >
                    {title}
                </Text>
            </HStack>
            <VStack gap="8" align="start" className={cls.content}>
                {children}
            </VStack>
        </VStack>
    )
}

export default Tape;