import React from 'react';
import { memo } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from 'lib/classNames/classNames';
import cls from './Popover.module.scss';
import { mapDirectionClass } from '../../styles/consts';

import popupCls from '../../styles/popup.module.scss';
import { DropdownDirection } from '../../types/ui';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: React.ReactNode;
    children: React.ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
    const {
        className,
        trigger,
        direction = 'bottom right',
        children,
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button 
                as='div' 
                className={popupCls.trigger}
            >
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
