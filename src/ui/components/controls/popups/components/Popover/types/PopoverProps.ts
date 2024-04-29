import { DropdownDirection } from "../../../types/ui";

export interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: React.ReactNode;
    children: React.ReactNode;
};
