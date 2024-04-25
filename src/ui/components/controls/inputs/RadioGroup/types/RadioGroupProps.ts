import { ChangeEvent } from "react";
import { validationStatus } from "ui/components/controls";
import { RadioGroupOptionType } from "../components/RadioGroupOption/types/RadioGroupOptionProps";

export interface RadioGroupProps{
    name: string;
    onChange: (value: string) => void;
    options: RadioGroupOptionType[];
    
    disabled?: boolean;
    className?: string;
    valid?: validationStatus;
}