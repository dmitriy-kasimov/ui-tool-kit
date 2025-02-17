import { InputHTMLAttributes } from "react";

type HTMLTextAreaProps = Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'onChange'>
export interface TextAreaProps extends HTMLTextAreaProps{
    value: string;
    onChange: (value: string) => void;

    label: string;
    limit: number;
  
    disabled?: boolean;

    rows?:number;
    cols?:number;

    className?:string;
}