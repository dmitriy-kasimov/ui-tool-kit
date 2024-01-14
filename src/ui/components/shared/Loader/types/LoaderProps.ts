export interface LoaderProps{
    size?: LoaderSize;
    children?: React.ReactNode;
}

export enum LoaderSize{
    SMALL,
    MIDDLE,
    BIG
}