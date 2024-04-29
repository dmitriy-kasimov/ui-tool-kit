import { ButtonHTMLAttributes, LegacyRef } from "react";

export type ButtonTheme = 'primary' | 'outline' | 'clear' | 'cancel' | 'accept';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;

    disabled?: boolean;
    square?: boolean;
    variant?: ButtonTheme;
    fullWidth?: boolean;
    className?: string;
}

