import { DropdownDirection } from "../../../types/ui";

export interface ListBoxItem <T extends string>{
    value: string;
    content: React.ReactNode;
    disabled?: boolean;
}

export interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    // extends string затем чтобы TS подхватывал энамы и выводил типы
    onChange: (value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}