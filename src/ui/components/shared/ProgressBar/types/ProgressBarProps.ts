export interface ProgressBarProps{
    value: number;
    max: number;
    type?: ProgressBarType;
}

export enum ProgressBarType{
    HORIZONTAL,
    VERTICAL
}