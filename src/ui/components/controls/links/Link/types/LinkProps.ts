import { ButtonHTMLAttributes } from "react";

export interface LinkProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;

    disabled?:boolean;
}