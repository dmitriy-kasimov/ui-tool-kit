import React, { FC, useMemo } from "react";
import { classNames } from "lib/classNames/classNames";
import { memo } from "react";
import  cls  from './Sidebar.module.scss';
import { SidebarProps } from "../../types/SidebarProps";
import { VStack } from "ui/components/shared/Stack";
import { Text } from "ui/components/shared/Text";
import { SidebarItem } from "../SidebarItem/SidebarItem";

export const Sidebar: FC<SidebarProps> = memo((props) => {
  const {
    className,
    items
  } = props;
  
  const itemsList = useMemo(()=> items.map((item, index) => (
    <SidebarItem 
      item={item}
      key={index}
    />
  )), [])

  return (
    <div className={classNames(cls.Sidebar, {}, [className])}>
        <VStack role="navigation" gap="16" max>
            {itemsList}
        </VStack>
    </div>
  );
});