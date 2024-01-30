import React, {FC, useCallback, useEffect, useRef, useState} from "react";
import { AlertProps, AlertType } from "../types/AlertProps";
import { classNames } from "lib/classNames/classNames";

import './Alert.scss';
import { Portal } from "ui/utils/Portal/Portal";
import { ANIMATION_DELAY } from "styles/effects/anims";
import { Text, textFont, textSize } from "ui/components/shared/Text";

import IconWarning from 'styles/assets/icons/warning.svg'
import IconError from 'styles/assets/icons/error.svg'
import IconSuccessfully from 'styles/assets/icons/successfully.svg'
import IconInfo from 'styles/assets/icons/info.svg'

const Alert: FC<AlertProps> = ({
                                children, 
                                lazy,
                                showTime = 1500,
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
    Alert__opened: isOpen,
    Alert__isClosing: isClosing,
  };

  let iconAlert: React.ReactNode;
  switch(type){
    case AlertType.WARNING:
      iconAlert = (<IconWarning />)
      break;
    case AlertType.ERROR:
      iconAlert = ( <IconError /> )
      break;
    case AlertType.SUCCESSFULLY:
      iconAlert = (<IconSuccessfully />)
      break;
    case AlertType.INFO:
      iconAlert = (<IconInfo />)
      break;
    default: 
      iconAlert = (<IconInfo />)
      break;
  }


  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames('Alert', mods, [])}>
        <div className={classNames('Alert__overlay', {}, [])}>
          <div className={classNames('Alert__overlay__content', {}, [])}>
            <Text font={textFont.TITLE} size={textSize.REGULAR}>{title}</Text>
            <div className={classNames('Alert__overlay__content__body', {}, [])}>
              {iconAlert}
              <div className={classNames('Alert__overlay__content__body__text', {}, [])}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  )
};

export default Alert;