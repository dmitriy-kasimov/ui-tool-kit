export type DisclousureItem = {
    title: React.ReactNode;
    description: React.ReactNode;
}

export interface DisclousureProps {
    className?: string;
    items: DisclousureItem[];
};