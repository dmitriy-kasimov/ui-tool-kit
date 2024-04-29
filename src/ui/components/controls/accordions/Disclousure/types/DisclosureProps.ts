export type DisclousureItem = {
    title: string;
    description: React.ReactNode;
}

export interface DisclousureProps {
    className?: string;
    items: DisclousureItem[];
};