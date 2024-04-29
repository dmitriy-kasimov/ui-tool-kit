import { SidebarItemType } from "ui/widgets/navigation/Sidebar";

export interface WindowProps {
    className?: string;
    children?: React.ReactNode;
    sidebar?: SidebarItemType[];

    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    fullscreen?: boolean;
};
