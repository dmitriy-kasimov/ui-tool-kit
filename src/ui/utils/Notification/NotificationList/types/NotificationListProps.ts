import { NotificationItemType } from "../../NotificationItem/types/NotificationItemProps";


export interface NotificationListProps {
    className?: string;
    notifications?: NotificationItemType[];
    shift: () => void;
};