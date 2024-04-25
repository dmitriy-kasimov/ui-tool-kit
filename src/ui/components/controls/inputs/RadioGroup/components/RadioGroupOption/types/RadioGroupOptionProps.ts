import { ChangeEvent } from "react";

export type RadioGroupOptionType = {
    value: string;
    description: string;

    disabled?: boolean;
    defaultChecked?: boolean;
}

export interface RadioGroupOptionProps{
    id: string;
    name: string;

    item: RadioGroupOptionType;
    onChange: (value: string) => void;   
}