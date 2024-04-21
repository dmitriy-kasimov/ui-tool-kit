export type AlertType = 'warning' | 'error' | 'successfully' | 'info';

export interface AlertProps{
    children: React.ReactNode;

    lazy?:boolean;
    showTime?: number;

    isOpen: boolean;
    onClose?: () => void;

    title?:string;
    type: AlertType;
}
