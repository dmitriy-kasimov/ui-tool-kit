import {ReactNode} from "react";

export interface AccordionProps {
    title: ReactNode;
    description: ReactNode;
    defaultOpen?: boolean;
    disabled?: boolean;

    className?: string;
    minWidth?: string;
    maxWidth?: string;
};