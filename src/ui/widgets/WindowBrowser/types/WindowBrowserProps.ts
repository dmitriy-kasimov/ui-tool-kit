
export interface WindowBrowserProps{
    title: React.ReactNode;
    links: React.ReactNode;
    children?: React.ReactNode;

    className?:string;

    fullscreen?: boolean;

    isOpen?: boolean;
    onClose?: () => void;
    lazy?:boolean;
    isClosable?:boolean;
}