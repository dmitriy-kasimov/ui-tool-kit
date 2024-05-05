export type AlertType = 'warning' | 'error' | 'success' | 'info' | 'default';

export type AlertItemType = {
    body: React.ReactNode;
    type: AlertType;

    title?: string;
    showTime?: number;
}

export interface AlertItemProps{
    item: AlertItemType;

    className?: string;
    lazy?:boolean;
    onClose?: () => void;
}
