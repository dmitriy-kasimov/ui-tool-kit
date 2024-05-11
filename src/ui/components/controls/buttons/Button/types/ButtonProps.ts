import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = 'primary' | 'outline' | 'clear' | 'cancel' | 'accept';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;

    disabled?: boolean;
    square?: boolean;
    variant?: ButtonVariant;
    fullWidth?: boolean;
    className?: string;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

