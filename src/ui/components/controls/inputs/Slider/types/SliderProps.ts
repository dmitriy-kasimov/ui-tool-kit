import { ChangeEvent, InputHTMLAttributes } from "react";
import { validationStatus } from "ui/components/controls";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>
export interface SliderProps extends HTMLInputProps{
    value: number;
    onChange: (value: number) => void;

    min: number;
    max: number;
    step: number;

    disabled?: boolean;

    valid?: validationStatus;

    className?: string;
}