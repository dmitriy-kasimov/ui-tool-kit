import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { NotifyProps, NotifyType } from "../types/NotifyProps";
import { ANIMATION_DELAY } from "styles/effects/anims";
import { Portal } from "ui/utils/Portal/Portal";
import { classNames } from "lib/classNames/classNames";
import { Text, textFont, textSize } from "ui/components/shared/Text";

import './Notify.scss'
import IconWarning from 'styles/assets/icons/warning.svg'
import IconError from 'styles/assets/icons/error.svg'
import IconSuccessfully from 'styles/assets/icons/successfully.svg'
import IconInfo from 'styles/assets/icons/info.svg'

const Notify: FC<NotifyProps> = ({
                                    children, 
                                    lazy,
                                    showTime = 2500,
                                    isOpen,
                                    onClose,
                                    title = 'Уведомление',
                                    type
                                }) => {
  
    const [isClosing, setIsClosing] = useState<boolean>(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const [isMounted, setIsMounted] = useState<boolean>(false);


    useEffect(() => {
        if (isOpen) {
        setIsMounted(true);
        setTimeout(closeHandler, showTime)
        } 
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if(onClose){
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                setIsClosing(false);
                onClose();
            }, ANIMATION_DELAY);
        }   
    }, [onClose]);

    const mods: Record<string, boolean> = {
        Notify__opened: isOpen,
        Notify__isClosing: isClosing,
    };

    let iconNotify: React.ReactNode;
    switch(type){
        case NotifyType.WARNING:
            iconNotify = (<IconWarning />)
            break;
        case NotifyType.ERROR:
            iconNotify = ( <IconError /> )
            break;
        case NotifyType.SUCCESSFULLY:
            iconNotify = (<IconSuccessfully />)
            break;
        case NotifyType.INFO:
            iconNotify = (<IconInfo />)
            break;
        default: 
            iconNotify = (<IconInfo />)
            break;
    }

    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames('Notify', mods, [])}>
                <div className={classNames('Notify__wrapper', {}, [])}>
                    <div className={classNames('Notify__wrapper__title', {}, [])}>
                        {iconNotify}
                        <Text 
                            className={classNames('Notify__wrapper__title__text', {}, [])}
                            font={textFont.TITLE} 
                            size={textSize.REGULAR}>
                                {title}
                        </Text>
                    </div>
                    <div className={classNames('Notify__wrapper__body', {}, [])}>
                        {children}
                    </div>
                </div>
            </div>
      </Portal>
    )
};

export default Notify;