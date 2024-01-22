import { ChangeEvent } from "react";
import { validationStatus } from "ui/components/controls";

export interface RadioGroupProps{
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;

    name: string;

    options: RadioGroupOptions[];
    
    disabled?: boolean;

    className?: string;

    valid?: validationStatus;
}

interface RadioGroupOptions{
    value: string;
    description: string;

    disabled?: boolean;
    defaultChecked?:boolean;
}