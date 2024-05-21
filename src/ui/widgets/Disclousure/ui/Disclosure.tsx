import React, { FC } from "react";
import { classNames } from "lib/classNames/classNames";
import { memo } from "react";
import  cls  from './Disclosure.module.scss';
import { DisclousureProps } from "../types/DisclosureProps";
import { Disclosure as HDisclosure } from '@headlessui/react'
import { VStack } from "ui/components/shared/Stack";
import { Text } from "ui/components/shared/Text";
import { Icon } from "ui/components/shared/Icon/Icon";
import ArrowBottom from 'styles/assets/icons/arrow-bottom.svg'
import { Button } from "ui/components/controls/buttons/Button";

export const Disclosure: FC<DisclousureProps> = memo((props) => {
    const {
        className,
        items,
        maxWidth = '500px',
        minWidth = '300px',
    } = props;
    return (
        <div className={classNames(cls.Disclosure, {}, [className])} style={{maxWidth, minWidth}}>
            <VStack gap="s" max>
                {items.map((item, index) => (
                    <HDisclosure key={index} defaultOpen={item.defaultOpen}>
                        {({ open }) => (
                            <>
                                <HDisclosure.Button 
                                    as={Button} 
                                    disabled={item.disabled} 
                                    addonRight={
                                        <Icon 
                                            Svg={ArrowBottom}
                                            className={classNames(cls.arrow, {[cls.open]: open}, [])}
                                            width={32}
                                            height={32}
                                        />
                                    }
                                    padding="xxs"
                                    fullWidth
                                    className={classNames(cls.DisclosureButton, {[cls.disabled]: item.disabled ?? false}, [])}
                                >
                                    <Text bold size="m">{item.title}</Text>
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
