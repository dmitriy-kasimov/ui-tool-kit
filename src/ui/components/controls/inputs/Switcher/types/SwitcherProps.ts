import { validationStatus } from "ui/components/controls";

export interface SwitcherProps{
    value: boolean;
    onChange: () => void;

    id: string;

    disabled?: boolean;

    valid?: validationStatus;

    className?: string;
}