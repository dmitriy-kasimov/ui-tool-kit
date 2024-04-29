import React, { FC } from "react";
import { classNames } from "lib/classNames/classNames";
import { memo } from "react";
import  cls  from './Disclosure.module.scss';
import { DisclousureProps } from "../../types/DisclosureProps";
import { Disclosure as HDisclosure } from '@headlessui/react'
import { HStack, VStack } from "ui/components/shared/Stack";
import { Text } from "ui/components/shared/Text";
import { Icon } from "ui/components/shared/Icon/Icon";
import ArrowDown from 'styles/assets/icons/arrowDown.svg'
import { DisclosureButton } from "../DisclosureButton/DisclosureButton";


export const Disclosure: FC<DisclousureProps> = memo((props) => {
    const {
        className,
        items
    } = props;
    return (
        <div className={classNames(cls.Disclosure, {}, [className])}>
            <VStack gap="8" max>
                {items.map((item, index) => (
                    <HDisclosure key={index}>
                        {({ open }) => (
                            <>
                                <HDisclosure.Button as={DisclosureButton} >
                                    <HStack gap="8" align="center" max justify="between">
                                        <Text font="title">{item.title}</Text>
                                        <Icon 
                                            Svg={ArrowDown}
                                            className={classNames(cls.arrow, {[cls.open]: open}, [])}
                                            width={24}
                                            height={24}
                                        />
                                    </HStack>
                                </HDisclosure.Button>
                                <HDisclosure.Panel className={cls.panel}>
                                    {item.description}
                                </HDisclosure.Panel>
                            </>
                        )}
                    </HDisclosure>
                ))}
            </VStack>
        </div>
    );
});
