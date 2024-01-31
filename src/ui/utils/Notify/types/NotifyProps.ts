export interface NotifyProps{
    children: React.ReactNode;

    lazy?:boolean;
    showTime?: number;

    isOpen: boolean;
    onClose?: () => void;

    title?:string;

    type: NotifyType;
}

export enum NotifyType{
    WARNING = 'WARNING',
    ERROR = 'ERROR',
    SUCCESSFULLY = 'SUCCESSFULLY',
    INFO = 'INFO'
}