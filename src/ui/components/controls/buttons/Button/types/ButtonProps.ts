import { ButtonHTMLAttributes } from "react";
import { validationStatus } from "ui/components/controls";

export enum ButtonTheme{
    PRIMARY = 'primary',
    OUTLINE = 'outline',
    CLEAR = 'clear',
    CANCEL = 'cancel',
    ACCEPT = 'accept'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;

    disabled?: boolean;
    square?: boolean;
    theme?: ButtonTheme;
    fullWidth?: boolean;
    className?: string;
}

