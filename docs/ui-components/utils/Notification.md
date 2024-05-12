## Disclosure

Usage example:

```typescript jsx
import React, { MutableRefObject, useEffect, useRef, useState } from "react";

import { 
    NotificationList,
    NotificationItemType,
    VStack,
    Button,
} from '@tr271v0r/ui-tool-kit'

let firstNotification: NotificationItemType = {
    title: 'Уведомление 1', showTime: 1500, id: 'first', body: (
        <VStack gap='8' align='center'>
            <Skeleton width={60} height={60} border='50%'/>
            <Skeleton width={200} height={30}/>
            <Skeleton width={200} height={30}/>
            <Skeleton width={200} height={30}/>
        </VStack>
    )
}

let secondNotification: NotificationItemType = {
    title: 'Уведомление 2', showTime: 2500, id: 'second', body: (
        <VStack gap='8' align='center'>
            <Skeleton width={60} height={60} border='50%'/>
            <Skeleton width={200} height={30}/>
            <Skeleton width={200} height={30}/>
            <Skeleton width={200} height={30}/>
        </VStack>
    )
}

let thirdNotification: NotificationItemType = {
    title: 'Уведомление 3', showTime: 3500, id: 'third', body: (
        <VStack gap='8' align='center'>
            <Skeleton width={60} height={60} border='50%'/>
            <Skeleton width={200} height={30}/>
            <Skeleton width={200} height={30}/>
            <Skeleton width={200} height={30}/>
        </VStack>
    )
}

export function App(){
    
    const [notifications, setNotifications] = useState<NotificationItemType[]>([]);

    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    useEffect(() => {
        if(notifications.length > 0){
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                const array = [...notifications];
                array.shift()
                setNotifications(array);
            }, notifications[0].showTime ?? 1500)
        } else {
            clearTimeout(timerRef.current);
        }
    }, [notifications])

    return (
        <VStack gap="16">
            <Button onClick={() => {
                setNotifications([...notifications, firstNotification]);
            }}>
                <Text>show first notification</Text>
            </Button>
            <Button onClick={() => {
                setNotifications([...notifications, secondNotification]);
            }}>
                <Text>show second notification</Text>
            </Button>
            <Button onClick={() => {
                setNotifications([...notifications, thirdNotification]);
            }}>
                <Text>show third notification</Text>
            </Button>

            <NotificationList 
                notifications={notifications}
                shift={() => {
                    const array = [...notifications];
                    array.shift()
                    setNotifications(array);
                }}
            />
        </VStack>
    )
}

```
