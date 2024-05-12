import React, {FC} from "react";
import { AlertItemProps } from "../types/AlertItemProps";
import { classNames } from "lib/classNames/classNames";

import cls from './AlertItem.module.scss';
import { Portal } from "ui/utils/Portal/Portal";
import { Text } from "ui/components/shared/Text";

import { useModal } from "lib/hooks/useModal/useModal";
import { ANIMATION_DELAY } from "styles/effects/anims";
import { VStack } from "ui/components/shared/Stack";

export const AlertItem: FC<AlertItemProps> = (props) => {

  const {
    item,
    className,
    lazy,
    onClose,
    portalElement
  } = props;

  const isOpen = true;

  const {
      isClosing,
      isMounted,
      close,
  } = useModal({
      animationDelay: ANIMATION_DELAY,
      onClose,
      isOpen,
  });

  // const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  
  const mods: Record<string, boolean> = {
    [cls.isOpen]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={portalElement}>
      <div className={classNames(cls.Alert, mods, [className])} onClick={close}>
        <VStack className={classNames(cls.wrapper, {}, [cls[item.type]])} gap='8'>
            <Text size='l' className={cls.title}>{item.title ?? 'Alert'}</Text>
            {item.body}
        </VStack>
      </div>
    </Portal>
  )
};
