import React, { FC, memo } from 'react';
import { Fragment } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { classNames } from 'lib/classNames/classNames';
import { mapDirectionClass } from '../../../styles/consts';
import popupCls from '../../../styles/popup.module.scss';
import { Button } from 'ui/components/controls/buttons/Button';
import { HStack } from 'ui/components/shared/Stack';
import { Text } from 'ui/components/shared/Text';
import { ListBoxProps } from '../types/ListBoxProps';


export const ListBox: FC<ListBoxProps> = memo((props) => {
    const {
        className,
        items,
        onChange,
        defaultValue,
        value,
        readonly=false,
        direction = 'bottom right',
        label,
    } = props;

    const optionsClasses = [
        mapDirectionClass[direction],
    ];

    return (
        <HStack
            gap="4"
        >
            {label && <Text>{label}</Text>}
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
                            {({ active }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active ?? false,
                                        [popupCls.disabled]: item.disabled ?? false,
                                    }, [])}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
});
