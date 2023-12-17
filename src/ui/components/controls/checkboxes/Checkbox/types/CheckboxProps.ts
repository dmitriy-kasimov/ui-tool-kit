import { ChangeEvent, InputHTMLAttributes } from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    checked?: boolean;
    onChange: () => void;
    children: React.ReactNode;
}