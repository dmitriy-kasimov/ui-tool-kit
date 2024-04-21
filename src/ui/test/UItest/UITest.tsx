import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { classNames } from "lib/classNames/classNames";
import { memo } from "react";
import  cls  from './UITest.module.scss';
import { NotificationList } from "ui/utils/Notification/ui/NotificationList/NotificationList";
import { VStack } from "ui/components/shared/Stack";
import { Skeleton } from "ui/components/shared/Skeleton/Skeleton";
import { NotificationItemType } from "ui/utils/Notification/model/types";
import NotificationItem from "ui/utils/Notification/ui/NotificationItem/NotificationItem";
import { Button } from "ui/components/controls/buttons/Button";
import { Text } from "ui/components/shared/Text";
import { Alert } from "ui/utils/Alert";
import { Modal } from "ui/utils/Modal";

interface UITestProps {
    className?: string;
};

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



export const UITest = memo(({className}: UITestProps) => {

    const [alert, setAlert] = useState(false);
    const showAlert = () => {
        setAlert(true)
    }
    const closeAlert = () => {
        setAlert(false)
    }


    const [modal, setModal] = useState(false);
    const onShowModal = () => {
        setModal(true);
    }
    const onCloseModal = () => {
        setModal(false);
    }

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
      
            <div className={classNames(cls.UITest, {}, [className])}>
                <VStack gap="16">
                    <Button onClick={showAlert}>
                        <Text>Показать Alert</Text>
                    </Button>
                    <Button onClick={onShowModal}>
                        <Text>Показать Modal</Text>
                    </Button>
                    <Button onClick={() => {
                        setNotifications([...notifications, firstNotification]);
                    }}>
                        <Text>Показать первое уведомление</Text>
                    </Button>
                    <Button onClick={() => {
                        setNotifications([...notifications, secondNotification]);
                    }}>
                        <Text>Показать второе уведомление</Text>
                    </Button>
                    <Button onClick={() => {
                        setNotifications([...notifications, thirdNotification]);
                    }}>
                        <Text>Показать третье уведомление</Text>
                    </Button>
                </VStack>


                <Alert isOpen={alert} lazy type="error" onClose={closeAlert}>
                    <Text>Alert</Text>
                </Alert>

                <Modal isOpen={modal} lazy onClose={onCloseModal}>
                    <Text>
                        <VStack gap="8" align="center">
                            <Skeleton width={100} height={100} border="50%"/>
                            <Skeleton width={150} height={40}/>
                            <Skeleton width={150} height={40}/>
                            <Skeleton width={150} height={40}/>
                            <div style={{width:'100px', height: '100px', background: 'red'}}></div>
                        </VStack>
                    </Text>
                </Modal>
                <NotificationList 
                    notifications={notifications}
                    shift={() => {
                        const array = [...notifications];
                        array.shift()
                        setNotifications(array);
                    }}
                />
            </div>
            

        
    );
});