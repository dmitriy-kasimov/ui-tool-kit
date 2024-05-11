import React, { FC }  from "react";
import cls from './ModalConfirm.module.scss'
import { ModalConfirmProps } from "../types/ModalConfirmProps";
import { Mods, classNames } from "lib/classNames/classNames";
import { Text } from "ui/components/shared/Text";
import { Button } from "ui/components/controls/buttons/Button";
import { useModal } from "lib/hooks/useModal/useModal";
import { ANIMATION_DELAY } from "styles/effects/anims";
import { Portal } from "ui/utils/Portal/Portal";
import { Overlay } from "ui/utils/Overlay/Overlay";
import { HStack, VStack } from "ui/components/shared/Stack";

export const ModalConfirm: FC<ModalConfirmProps> = (props) => {
    const {
        isOpen, 
        onClose, 
        onConfirm,
        title = 'Подтверждение действия',
        children,
        lazy = true,
        className,
        portalElement
    } = props;

    const {
        isClosing,
        isMounted,
        close,
    } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    const handleConfirm =() => {
        close();
        onConfirm();
    }
    return (
        <Portal element={portalElement}>
             <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    <VStack gap="32">
                        <HStack max justify="center">
                            <Text>{title}</Text>
                        </HStack>
                        <HStack max align="center">
                            {children}
                        </HStack>
                        <HStack max justify="center" gap="32">
                            <Button variant="cancel" onClick={close}>
                                <Text>Отменить</Text>
                            </Button>
                            <Button variant="accept" onClick={handleConfirm}>
                                <Text>Подтвердить</Text>
                            </Button>
                        </HStack>
                    </VStack>
                </div>
            </div>
        </Portal>
    )
};