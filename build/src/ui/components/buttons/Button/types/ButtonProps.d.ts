import { ButtonHTMLAttributes } from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: buttonVariant;
    children: React.ReactNode;
}
export declare enum buttonVariant {
    PRIMARY = 0,
    OUTLINE = 1
}
