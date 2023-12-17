import { ButtonHTMLAttributes } from "react";
import { validationStatus } from "ui/components/controls";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;

    valid?: validationStatus;
}
