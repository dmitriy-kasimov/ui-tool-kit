export type DisclousureItem = {
    title: string;
    description: React.ReactNode;
    
    defaultOpen?: boolean;
    disabled?: boolean;
}

export interface DisclousureProps {
    className?: string;
    items: DisclousureItem[];

    minWidth?: string;
    maxWidth?: string;
};