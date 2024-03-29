import React from 'react';
import { Fragment } from 'react';
import { Listbox as HListBox } from '@headlessui/react';

import cls from './ListBox.module.scss';
import { classNames } from 'lib/classNames/classNames';
import { DropdownDirection } from '../../types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import { Button } from 'ui/components/controls/buttons/Button';
import { HStack } from 'ui/components/sections/flex/Stack';

export interface ListBoxItem{
    value: string;
    content: React.ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    // extends string затем чтобы TS подхватывал энамы и выводил типы
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox(props: ListBoxProps) {
    const {
        className,
        items,
        onChange,
        defaultValue,
        value,
        readonly=false,
        direction = 'top right',
        label,
    } = props;

    const optionsClasses = [
        mapDirectionClass[direction],
    ];

    return (
        <HStack
            gap="4"
        >
            {label && <span>{label}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button
                    className={cls.trigger}
                >
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>

                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active ?? false,
                                        [popupCls.disabled]: item.disabled ?? false,
                                    }, [])}
                                >
                                    {selected && '=>' }
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
