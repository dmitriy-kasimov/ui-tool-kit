import React, { FC, useMemo } from "react";
import { classNames } from "lib/classNames/classNames";
import { memo } from "react";
import  cls  from './Alert.module.scss';
import { AlertProps } from "../types/AlertProps";
import { AlertItem } from "../../AlertItem/ui/AlertItem";

export const Alert: FC<AlertProps> = memo((props) => {
    const {
        className, 
        alert,
        portalElement
    } = props;

    const Alert = useMemo(() => {
       if(alert === undefined) return null;
       return (
        <AlertItem
            portalElement={portalElement} 
            item={alert}
            lazy
        />)
    }, [alert]) 

    return (
        <div className={classNames(cls.Alert, {}, [className])}>
            {Alert}
        </div>
    );
});