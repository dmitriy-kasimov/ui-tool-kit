export interface SwitcherProps{
    id: string;
    value: boolean;
    onChange: () => void;

    disabled?: boolean;
    className?: string;
}