import { ChangeEvent } from "react";
import { validationStatus } from "ui/components/controls";

export interface SliderProps{
    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;

    min: number;
    max: number;
    step: number;

    disabled?: boolean;

    valid?: validationStatus;

    className?: string;
}