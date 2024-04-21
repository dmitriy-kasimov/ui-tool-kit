import React, {FC, MutableRefObject, useCallback, useEffect, useRef } from "react";
import { AlertProps, AlertType } from "../types/AlertProps";
import { classNames } from "lib/classNames/classNames";

import cls from './Alert.module.scss';
import { Portal } from "ui/utils/Portal/Portal";
import { Text, textFont, textSize } from "ui/components/shared/Text";

import IconWarning from 'styles/assets/icons/warning.svg'
import IconError from 'styles/assets/icons/error.svg'
import IconSuccessfully from 'styles/assets/icons/successfully.svg'
import IconInfo from 'styles/assets/icons/info.svg'
import { useModal } from "lib/hooks/useModal/useModal";
import { ANIMATION_DELAY } from "styles/effects/anims";
import { HStack, VStack } from "ui/components/shared/Stack";


const Alert: FC<AlertProps> = (props) => {

  const {
    children, 
    lazy,
    showTime = 1500,
    isOpen,
    onClose,
    title = 'Уведомление',
    type
  } = props;

  

  const getIconAlert = useCallback((type: AlertType) => {
    const iconAlert = {
      'warning': (<IconWarning />),
      'error': (<IconError />),
      'successfully': (<IconSuccessfully />),
      'info': (<IconInfo />),
    }
    return iconAlert[type];
  }, [type])

  const {
      isClosing,
      isMounted,
      close,
  } = useModal({
      animationDelay: ANIMATION_DELAY,
      onClose,
      isOpen,
  });

  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      close();
    }, showTime);   
  }, [showTime, close])

  useEffect(() => {
   return () => {
    clearTimeout(timerRef.current);
   }
  }, [isOpen])

  const mods: Record<string, boolean> = {
    [cls.isOpen]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Alert, mods, [])} onClick={close}>
        <VStack className={cls.wrapper} gap='16'>
          <HStack max justify="center" gap="8">
            {getIconAlert(type)}
            <Text font={textFont.TITLE} size={textSize.REGULAR}>{title}</Text>
            {getIconAlert(type)}
          </HStack>
          <div className={classNames(cls.description, {}, [])}>
              {children}
          </div>
        </VStack>
      </div>
    </Portal>
  )
};

export default Alert;
