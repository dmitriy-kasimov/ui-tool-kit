import { ChangeEvent, InputHTMLAttributes } from "react";
import { validationStatus } from "ui/components/controls";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>
export interface TextFieldProps extends HTMLInputProps{
    value: string;
    onChange: (value: string) => void;

    label: string;
    limit: number;
  
    valid?: validationStatus;
    disabled?: boolean;
    masked?: boolean;

    className?:string;
}