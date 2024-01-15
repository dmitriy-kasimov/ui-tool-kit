export interface LoaderProps{
    size?: LoaderSize;
    children?: React.ReactNode;

    className?:string;
}

export enum LoaderSize{
    SMALL,
    MIDDLE,
    BIG
}