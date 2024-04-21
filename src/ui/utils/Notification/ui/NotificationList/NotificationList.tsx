import React, { useCallback, useEffect, useMemo, useState } from "react";
import { classNames } from "lib/classNames/classNames";
import { memo } from "react";
import  cls  from './NotificationList.module.scss';
import { VStack } from "ui/components/shared/Stack";
import { NotificationItemType } from "../../model/types";
import NotificationItem  from "../NotificationItem/NotificationItem";

interface NotificationListProps {
    className?: string;
    notifications?: NotificationItemType[];
    shift: () => void;
};

export const NotificationList = memo((props: NotificationListProps) => {
    const {
        className, 
        notifications,
        shift
    } = props;

    if(!notifications){
        return null;
    }

    const notifList = useCallback(() => {
        return notifications?.map(item => (
            <NotificationItem 
                key={item.id}
                className={cls.notification} 
                item={item}
                onClose={shift}
            />
        ))
    }, [notifications])

    return (
        <VStack 
            className={classNames(cls.NotificationList, {}, [className])}
            gap="16"
            justify="end"
        >
            {notifList()}
        </VStack>
    );
});