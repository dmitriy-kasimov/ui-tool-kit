import { HTMLAttributes, ReactNode } from "react";

export type CardVariant = 'normal' | 'outlined';
export type CardPadding = '0' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
export type CardBorder = 'round' | 'normal';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;

    variant?: CardVariant;
    padding?: CardPadding;
    border?: CardBorder;

    fullWidth?: boolean;
    fullHeight?: boolean;
}