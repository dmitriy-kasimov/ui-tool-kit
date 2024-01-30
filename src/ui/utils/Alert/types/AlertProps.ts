export interface AlertProps{
    children: React.ReactNode;

    lazy?:boolean;
    showTime?: number;

    isOpen: boolean;
    onClose?: () => void;

    title?:string;
    type: AlertType;
}

export enum AlertType{
    WARNING = 'WARNING',
    ERROR = 'ERROR',
    SUCCESSFULLY = 'SUCCESSFULLY',
    INFO = 'INFO'
}