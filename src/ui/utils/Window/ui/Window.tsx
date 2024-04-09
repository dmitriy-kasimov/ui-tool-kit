import React from 'react';
import { Mods, classNames } from "lib/classNames/classNames";
import { memo } from "react";
import  cls  from './Window.module.scss';
import { Portal } from 'ui/utils/Portal/Portal';
import { useModal } from 'lib/hooks/useModal/useModal';
import { ANIMATION_DELAY } from 'styles/effects/anims';
import { Overlay } from 'ui/utils/Overlay/Overlay';


interface WindowProps {
    className?: string;
    children?: React.ReactNode;

    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    fullscreen?: boolean
};

export const Window = memo((props: WindowProps) => {
    const {
        className,
        children,
        isOpen=true,
        onClose,
        lazy = true,
        fullscreen = false
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
        [cls.fullscreen]: fullscreen,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Window, mods, [className])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});