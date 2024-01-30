import React, {
    useCallback, useEffect, useRef, useState,
} from 'react';
import './Modal.scss';
import { Portal } from 'ui/utils/Portal/Portal';
import { classNames } from 'lib/classNames/classNames';
import { ANIMATION_DELAY } from 'styles/effects/anims';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?:boolean;
}

export const Modal = (props: ModalProps) => {
    const {
        className='',
        children,
        isOpen=false,
        onClose,
        lazy,
    } = props;

    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    // Новые ссылки!!!
    // Для сохранения сслыки useCallback
    const onKeyDownCloseModal = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDownCloseModal);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDownCloseModal);
        };
    }, [isOpen, onKeyDownCloseModal]);

    const mods: Record<string, boolean> = {
        Modal__opened: isOpen,
        Modal__isClosing: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames('Modal', mods, [className])}>
                <div className={'Modal__overlay'} onClick={closeHandler}>
                    <div
                        className={'Modal__overlay__content'}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
