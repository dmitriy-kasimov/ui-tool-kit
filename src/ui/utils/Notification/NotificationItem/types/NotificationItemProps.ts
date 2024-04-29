export interface NotificationItemProps {
    className?: string;

    item: NotificationItemType;
    onClose?: () => void;
    lazy?:boolean;
};

export type NotificationItemType = {
    id: string;

    title?: string;
    body: React.ReactNode;
    showTime?: number;
}