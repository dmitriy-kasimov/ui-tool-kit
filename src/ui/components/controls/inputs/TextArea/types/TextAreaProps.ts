import { ChangeEvent, InputHTMLAttributes } from "react";
import { validationStatus } from "ui/components/controls";

type HTMLTextAreaProps = Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'onChange'>
export interface TextAreaProps extends HTMLTextAreaProps{
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;

    label: string;
    limit: number;
  
    valid?: validationStatus;
    disabled?: boolean;

    rows?:number;
    cols?:number;

    className?:string;
}