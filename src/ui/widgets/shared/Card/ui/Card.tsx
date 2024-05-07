import React from 'react';

import { memo } from 'react';
import { classNames } from 'lib/classNames/classNames';
import cls from './Card.module.scss';
import { CardPadding, CardProps } from '../types/CardProps';

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    'xxs': 'gap_xxs',
    'xs': 'gap_xs',
    's': 'gap_s',
    'm': 'gap_m',
    'l': 'gap_l',
    'xl': 'gap_xl',
};

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        fullWidth = false,
        fullHeight = false,
        padding = 'm',
        border = 'normal',
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            className={classNames(
                cls.Card,
                { [cls.fullWidth]: fullWidth, [cls.fullHeight]: fullHeight },
                [className, cls[variant], cls[paddingClass], cls[border]],
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
});
