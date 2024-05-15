import React from 'react';

import { memo } from 'react';
import { classNames } from 'lib/classNames/classNames';
import cls from './Card.module.scss';
import { CardPadding, CardProps } from '../types/CardProps';

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'padding_0',
    'xxs': 'padding_xxs',
    'xs': 'padding_xs',
    's': 'padding_s',
    'm': 'padding_m',
    'l': 'padding_l',
    'xl': 'padding_xl',
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
