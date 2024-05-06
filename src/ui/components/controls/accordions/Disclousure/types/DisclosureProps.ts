export type DisclousureItem = {
    title: string;
    description: React.ReactNode;
    
    disabled?: boolean;
}

export interface DisclousureProps {
    className?: string;
    items: DisclousureItem[];
    maxWidth?: string;
};