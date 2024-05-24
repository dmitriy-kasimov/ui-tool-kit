import { HTMLAttributes, ReactNode } from "react";

export type CardVariant = 'normal' | 'outlined';
export type CardContentMargin = '0' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
export type CardBorder = 'round' | 'normal';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;

    variant?: CardVariant;
    contentMargin?: CardContentMargin;
    border?: CardBorder;

    fullWidth?: boolean;
    fullHeight?: boolean;

    minWidth?: string;
    maxWidth?: string;
    minHeight?: string;
    maxHeight?: string;
}