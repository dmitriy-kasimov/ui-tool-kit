import React, { FC, memo } from 'react';
import { Menu } from '@headlessui/react';
import { Fragment } from 'react';
import { classNames } from 'lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { mapDirectionClass } from '../../../styles/consts';
import popupCls from '../../../styles/popup.module.scss';
import { Link } from 'ui/components/controls/links/Link';
import { DropdownProps } from '../types/DropdownProps';

export const Dropdown:FC<DropdownProps> = memo((props) => {
    const {
        className, trigger, items, direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, { [popupCls.active]: active })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item 
                                as={Link} 
                                onClick={item.onClick}
                                disabled={item.disabled}
                                key={'dropdown-key-'+index}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item 
                            as={Fragment} 
                            disabled={item.disabled}
                            key={'dropdown-key-'+index}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
});
