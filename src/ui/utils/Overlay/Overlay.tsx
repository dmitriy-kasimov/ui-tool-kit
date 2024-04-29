import React, { FC, memo } from 'react';
import { classNames } from 'lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay: FC<OverlayProps> = memo((props) => {
    const {
        className,
        onClick,
    } = props;

    return (
        <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} />
    );
});
