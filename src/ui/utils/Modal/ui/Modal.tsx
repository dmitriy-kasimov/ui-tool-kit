import React, { FC } from 'react';
import { Mods, classNames } from 'lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '../../Portal/Portal';
import { Overlay } from '../../Overlay/Overlay';
import { useModal } from 'lib/hooks/useModal/useModal';
import { ANIMATION_DELAY } from 'styles/effects/anims';
import { ModalProps } from '../types/ModalProps';

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen=true,
        onClose,
        lazy,
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

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
