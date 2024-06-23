import React, { FC, memo } from 'react';
import { classNames } from 'lib/classNames/classNames';
import cls from './Overlay.module.scss';

type OverlayType = 'window' | 'modal';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
    type: OverlayType;
}

export const Overlay: FC<OverlayProps> = memo((props) => {
    const {
        className,
        onClick,
        type
    } = props;

    const mapOverlayTypeToZIndex: Record<OverlayType, string> = {
        modal: 'z-index_modal',
        window: 'z-index_window'
    }

    return (
        <div onClick={onClick} className={classNames(cls.Overlay, {}, [className, cls[mapOverlayTypeToZIndex[type]]])} />
    );
});
