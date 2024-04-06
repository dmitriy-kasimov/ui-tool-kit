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
    const {className} = props;
    return (
        <div className={cls.Disclosure}>
            <VStack gap="8" max>
                <HDisclosure>
                    {({ open }) => (
                        <>
                            <HDisclosure.Button as={Button} fullWidth className={cls.btn}>
                                <HStack gap="8" align="center" max justify="between">
                                    <Text>What is your refund policy?</Text>
                                    <Icon 
                                        Svg={ArrowDown}
                                        className={classNames(cls.arrow, {[cls.open]: open}, [])}
                                    />
                                </HStack>
                            </HDisclosure.Button>
                            <HDisclosure.Panel className={cls.panel}>
                                If you're unhappy with your purchase for any reason, email us
                                within 90 days and we'll refund you in full, no questions asked.
                            </HDisclosure.Panel>
                        </>
                    )}
                </HDisclosure>
                <HDisclosure>
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
                </HDisclosure>
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