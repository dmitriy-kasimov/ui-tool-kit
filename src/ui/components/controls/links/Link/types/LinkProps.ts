export interface LinkProps{
    name: string;
    active?: boolean;
    onClick: () => void;

    className?: string;
}