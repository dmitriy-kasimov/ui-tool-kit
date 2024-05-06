import { ReactElement } from "react";
import { SidebarItemType } from "ui/widgets/navigation/Sidebar";

export interface WindowProps {
    className?: string;
    content?: ReactElement;
    sidebar?: SidebarItemType[];

    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    fullscreen?: boolean;
};
