import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: buttonVariant;
    children: React.ReactNode;
}

export enum buttonVariant{
    PRIMARY,
    OUTLINE
}