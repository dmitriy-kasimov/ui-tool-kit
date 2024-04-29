import { ReactNode } from "react";
import { DropdownDirection } from "../../../types/ui";

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

export interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    direction?: DropdownDirection;
    trigger: ReactNode;
}