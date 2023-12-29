import { ChangeEvent } from "react";

export interface RadioGroupOptionProps{
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;

    id: string;
    name: string;
    description: string;

    disabled?: boolean;
}