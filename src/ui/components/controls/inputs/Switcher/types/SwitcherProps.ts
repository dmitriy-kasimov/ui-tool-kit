export interface SwitcherProps{
    value: boolean;
    onChange: () => void;

    id: string;

    disabled?: boolean;
}