import {ReactNode} from "react";

export type DisclousureItem = {

}

export interface AccordionProps {
    title: ReactNode;
    description: ReactNode;
    defaultOpen?: boolean;
    disabled?: boolean;

    className?: string;
    minWidth?: string;
    maxWidth?: string;
};