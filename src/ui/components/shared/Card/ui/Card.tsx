import React from 'react';

import { memo } from 'react';
import { classNames } from 'lib/classNames/classNames';
import cls from './Card.module.scss';
import { CardContentMargin, CardProps } from '../types/CardProps';

const mapMarginToClass: Record<CardContentMargin, string> = {
    '0': 'margin_0',
    'xxs': 'margin_xxs',
    'xs': 'margin_xs',
    's': 'margin_s',
    'm': 'margin_m',
    'l': 'margin_l',
    'xl': 'margin_xl',
};

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        fullWidth = false,
        fullHeight = false,
        contentMargin = 'xs',
        border = 'normal',
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        ...otherProps
    } = props;

    const marginClass = mapMarginToClass[contentMargin];

    return (
        <div
            className={classNames(
                cls.CardLayout,
                { [cls.fullWidth]: fullWidth, [cls.fullHeight]: fullHeight },
                [className, cls[variant], cls[border]],
            )}

            {...otherProps}
        >
            <div
                className={classNames(cls.Card, {}, [cls[marginClass]])}
                style={{
                     minWidth: minWidth,
                     maxWidth: maxWidth,
                     minHeight: minHeight,
                     maxHeight: maxHeight
            }}
            >
                {children}
            </div>
        </div>
    );
});
