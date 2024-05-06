export interface ProgressBarProps{
    value: number;
    max: number;
    type?: ProgressBarType;

    className?:string;

    length?: string;
    thickness?: string;
}

export type ProgressBarType = 'horizontal' | 'vertical';