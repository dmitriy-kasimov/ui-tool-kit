import { ButtonHTMLAttributes } from "react";

export interface LinkProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    onClick?: () => void;

    disabled?:boolean;
    className?: string;
}