import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = 'primary' | 'outline' | 'clear' | 'cancel' | 'accept';
export type ButtonPadding = '0' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;

    disabled?: boolean;
    square?: boolean;
    variant?: ButtonVariant;
    fullWidth?: boolean;
    className?: string;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;

    padding?: ButtonPadding;
}

