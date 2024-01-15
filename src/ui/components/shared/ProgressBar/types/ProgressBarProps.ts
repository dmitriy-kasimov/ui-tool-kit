export interface ProgressBarProps{
    value: number;
    max: number;
    type?: ProgressBarType;

    className?:string;
}

export enum ProgressBarType{
    HORIZONTAL,
    VERTICAL
}