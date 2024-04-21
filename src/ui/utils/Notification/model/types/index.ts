import { MutableRefObject } from "react";

export type NotificationItemType = {
    id: string;

    title?: string;
    body: React.ReactNode;
    showTime?: number;
}