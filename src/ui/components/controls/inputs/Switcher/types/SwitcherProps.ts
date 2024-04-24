import { validationStatus } from "ui/components/controls";

export interface SwitcherProps{
    id: string;
    value: boolean;
    onChange: () => void;

    disabled?: boolean;

    valid?: validationStatus;

    className?: string;
}