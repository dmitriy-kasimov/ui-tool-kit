import { DropdownDirection } from "../../../types/ui";

export interface ListBoxItem{
    value: string;
    content: React.ReactNode;
    disabled?: boolean;
}

export interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    // extends string затем чтобы TS подхватывал энамы и выводил типы
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}