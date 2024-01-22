import { ChangeEvent, InputHTMLAttributes } from "react";
import { validationStatus } from "ui/components/controls";

type HTMLSliderProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>
export interface SliderProps extends HTMLSliderProps{
    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;

    min: number;
    max: number;
    step: number;

    disabled?: boolean;

    valid?: validationStatus;

    className?: string;
}