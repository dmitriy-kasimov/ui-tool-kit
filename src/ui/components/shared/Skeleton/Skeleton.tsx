import React, { FC } from 'react';
import { CSSProperties, memo } from 'react';
import { classNames } from 'lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton: FC<SkeletonProps> = memo((props) => {
    const {
        className,
        width,
        height,
        border,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
});
