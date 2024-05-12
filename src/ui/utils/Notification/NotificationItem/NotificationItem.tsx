import React, { FC } from "react";
import { classNames } from "lib/classNames/classNames";
import { memo } from "react";
import  cls  from './NotificationItem.module.scss';
import { VStack } from "ui/components/shared/Stack";
import { Text } from "ui/components/shared/Text";
import { useModal } from "lib/hooks/useModal/useModal";
import { ANIMATION_DELAY } from "styles/effects/anims";
import { NotificationItemProps } from "./types/NotificationItemProps";



export const NotificationItem: FC<NotificationItemProps> = memo((props) => {
    const {
        className,
        item,
        lazy,
        onClose,
    } = props;

    const isOpen=true;

    const {
        isClosing,
        isMounted,
        close,
    } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Record<string, boolean> = {
        [cls.isOpen]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <div 
            className={classNames(cls.NotificationItem, mods, [className])} 
            onClick={close}
        >
            <VStack 
                className={cls.content}
                gap="8"
                align="center"
            >
                <Text size="l">{item.title ?? 'Уведомление'}</Text>
                {item.body}
            </VStack>
        </div>
    );
});
