import React from "react";
import { classNames } from "lib/classNames/classNames";
import { memo } from "react";
import  cls  from './SidebarItem.module.scss';
import { HStack } from "ui/components/shared/Stack";
import { Icon } from "ui/components/shared/Icon/Icon";
import { Text } from "ui/components/shared/Text";
import { SidebarItemType } from "../../types/SidebarProps";
import { Link } from "ui/components/controls/links/Link";

interface SidebarItemProps{
    className?: string; 
    item: SidebarItemType;
};

export const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        className,
        item,
    } = props;

    return (
        <Link
            onClick={item.onClick}
            disabled={item.disabled}
        >
            <HStack 
                className={classNames(cls.SidebarItem, {}, [className])} 
                max 
                gap='8'
            >
                {item.Icon}
                {item.desciption}
            </HStack>
        </Link> 
    );
});