import React, { FC, memo, useMemo } from 'react';
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
import ArrowBottom from 'styles/assets/icons/arrow-bottom.svg'
import { Icon } from 'ui/components/shared/Icon';

export const ListBox = memo(<T extends string>(props: ListBoxProps<T>) => {
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

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);


    return (
        <HStack
            gap="xs"
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
                    as={Button}
                    addonRight={<Icon Svg={ArrowBottom} 
                    width={24} height={24}/>}
                >
                    {selectedItem?.content ?? defaultValue}
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
