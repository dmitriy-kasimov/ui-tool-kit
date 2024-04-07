import React, { useMemo } from "react";
import { classNames } from "lib/classNames/classNames";
import { memo } from "react";
import  cls  from './Disclosure.module.scss';
import { DisclousureProps } from "./types/DisclosureProps";
import { Disclosure as HDisclosure, Transition} from '@headlessui/react'
import { HStack, VStack } from "ui/components/shared/Stack";
import { Button } from "ui/components/controls/buttons/Button";
import { ButtonTheme } from "ui/components/controls/buttons/Button/types/ButtonProps";
import { Text } from "ui/components/shared/Text";
import { Icon } from "ui/components/shared/Icon/Icon";
import ArrowDown from 'styles/assets/icons/arrowDown.svg'


export const Disclosure = memo((props: DisclousureProps) => {
    const {
        className,
        items
    } = props;
    return (
        <div className={classNames(cls.Disclosure, {}, [className])}>
            <VStack gap="8" max>
                {items.map((item, index) => (
                    <HDisclosure>
                        {({ open }) => (
                            <>
                                <HDisclosure.Button as={Button} fullWidth className={cls.btn} key={index}>
                                    <HStack gap="8" align="center" max justify="between">
                                        <Text>{item.title}</Text>
                                        <Icon 
                                            Svg={ArrowDown}
                                            className={classNames(cls.arrow, {[cls.open]: open}, [])}
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
                
                {/* <HDisclosure>
                    {({ open }) => (
                        <>
                            <HDisclosure.Button as={Button} fullWidth className={cls.btn}>
                                <HStack gap="8" align="center" max justify="between">
                                    <Text>Do you offer technical support?</Text>
                                    <Icon 
                                        Svg={ArrowDown}
                                        className={classNames(cls.arrow, {[cls.open]: open}, [])}
                                    />
                                </HStack>
                            </HDisclosure.Button>
                            <HDisclosure.Panel className={cls.panel}>
                                No.
                            </HDisclosure.Panel>
                        </>
                    )}
                </HDisclosure> */}
            </VStack>
        </div>
    );
});

/*
<HDisclosure >
            <HDisclosure.Button className="py-2">
            Is team pricing available?
            </HDisclosure.Button>
            <HDisclosure.Panel className="text-gray-500">
            Yes! You can purchase a license that you can share with your entire
            team.
            </HDisclosure.Panel>

            <HDisclosure.Button className="py-2">
            Is team pricing available?
            </HDisclosure.Button>
            <HDisclosure.Panel className="text-gray-500">
            Yes! You can purchase a license that you can share with your entire
            team.
            </HDisclosure.Panel>
        </HDisclosure>
*/