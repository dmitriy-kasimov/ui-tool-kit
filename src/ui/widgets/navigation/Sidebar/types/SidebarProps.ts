import { ReactElement } from "react";

export interface SidebarProps {
    className?: string;
    items: SidebarItemType[];
};

export type SidebarItemType = {
    Icon?: ReactElement;
    desciption?: ReactElement;
    onClick: () => void;
    disabled?: boolean;
}
