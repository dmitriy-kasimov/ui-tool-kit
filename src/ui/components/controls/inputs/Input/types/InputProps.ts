import { ChangeEvent, InputHTMLAttributes } from "react";
import { validationStatus } from "ui/components/controls";

//export interface InputProps  extends InputHTMLAttributes<HTMLInputElement> {
export interface InputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;

    label: string;
    limit: number;
  
    valid?: validationStatus;
    disabled?: boolean;
    masked?: boolean;
}