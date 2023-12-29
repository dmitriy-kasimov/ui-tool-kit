import { ChangeEvent } from "react";

export interface RadioGroupProps{
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;

    name: string;

    options: RadioGroupOptions[];
    
    disabled?: boolean;
}

interface RadioGroupOptions{
    value: string;
    description: string;

    disabled?: boolean;
}