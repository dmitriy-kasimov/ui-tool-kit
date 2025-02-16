import React, { FC } from "react";
import { classNames } from "lib/classNames/classNames";
import { memo } from "react";
import  cls  from './Accordion.module.scss';
import {AccordionProps } from "../types/AccordionProps";
import { Disclosure } from '@headlessui/react'
import { Icon } from "ui/components/shared/Icon/Icon";
import ArrowBottom from 'styles/assets/icons/arrow-bottom.svg';
import { Button } from "ui/components/controls/buttons/Button";

export const Accordion: FC<AccordionProps> = memo((props) => {
    const {
        title,
        description,
        defaultOpen,
        disabled,
        className,
        maxWidth = '500px',
        minWidth = '300px',
    } = props;
    return (
        <Disclosure
            defaultOpen={defaultOpen}
            as={'div'}
            className={cls.Accordion}
            style={{maxWidth, minWidth}}
        >
            {({ open }) => (
                <>
                    <Disclosure.Button
                        as={Button}
                        disabled={disabled}
                        addonLeft={title}
                        variant={'clear'}
                        addonRight={
                            <Icon
                                Svg={ArrowBottom}
                                className={classNames(cls.arrow, {[cls.open]: open}, [])}
                                width={32}
                                height={32}
                            />
                        }
                        padding="xs"
                        fullWidth
                        className={classNames('', {[cls.disabled]: disabled ?? false}, [])}
                    >
                        {null}
                    </Disclosure.Button>
                    <Disclosure.Panel>
                        {description}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
});
