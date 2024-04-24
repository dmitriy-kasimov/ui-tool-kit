export type AlertType = 'warning' | 'error' | 'success' | 'info';

export type AlertItemType = {
    body: React.ReactNode;

    title?: string;
    type?: AlertType;
    showTime?: number;
}

export interface AlertItemProps{
    item: AlertItemType;

    className?: string;
    lazy?:boolean;
    onClose?: () => void;
}
