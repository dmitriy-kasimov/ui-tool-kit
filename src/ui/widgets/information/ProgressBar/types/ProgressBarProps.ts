export interface ProgressBarProps{
    value: number;
    max: number;
    type?: ProgressBarType;

    className?:string;
}

export type ProgressBarType = 'horizontal' | 'vertical';