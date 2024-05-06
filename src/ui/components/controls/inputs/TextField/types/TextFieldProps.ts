import { ChangeEvent, InputHTMLAttributes } from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>
export interface TextFieldProps extends HTMLInputProps{
    value: string;
    onChange: (value: string) => void;

    label: string;
    limit: number;
  
    disabled?: boolean;
    masked?: boolean;

    inputWidth?: string;

    className?:string;
}