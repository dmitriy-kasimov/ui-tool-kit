import { validationStatus } from "ui/components/controls";

export type SelectProps = {
    selected: Option | null;
    options: Option[];
    placeholder?: string;

    onChange?: (selected: Option['value']) => void;
    onClose?: () => void;

    valid?: validationStatus;
    disabled?: boolean;

    className?: string;
}

export type Option = {
    title: string;
    value: string;
}

export type OptionProps = {
    option: Option;
    onClick: (value: Option['value']) => void;
};