import { ReactElement } from "react";
import { SidebarItemType } from "ui/widgets/Sidebar";

export type JustifyContent = 'start' | 'center' | 'end'| 'between';
export type AlignContent = 'start' | 'center' | 'end' | 'stretch';

export interface WindowProps {
    isOpen?: boolean;
    onClose?: () => void;
    content?: ReactElement;

    sidebar?: SidebarItemType[];
    fullscreen?: boolean;
    closable?: boolean;
    lazy?: boolean;

    justifyContent?: JustifyContent; 
    alignContent?: AlignContent;
    className?: string;
    portalElement?: HTMLElement;
};
