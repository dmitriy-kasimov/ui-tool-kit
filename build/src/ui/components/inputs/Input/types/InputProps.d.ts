import { InputHTMLAttributes } from "react";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    limit: number;
    masked?: boolean;
}
