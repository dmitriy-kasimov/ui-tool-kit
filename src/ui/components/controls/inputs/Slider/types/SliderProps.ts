import { ChangeEvent } from "react";

export interface SliderProps{
    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;

    min: number;
    max: number;
    step: number;

    disabled?: boolean;
}