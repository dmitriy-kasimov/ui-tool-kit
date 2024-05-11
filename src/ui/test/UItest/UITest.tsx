import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { classNames } from "lib/classNames/classNames";
import { memo } from "react";
import  cls  from './UITest.module.scss';
import { NotificationList } from "ui/utils/Notification";
import { HStack, VStack } from "ui/components/shared/Stack";
import { Skeleton } from "ui/components/shared/Skeleton/Skeleton";
import { NotificationItemType } from "ui/utils/Notification";
import { Button } from "ui/components/controls/buttons/Button";
import { Text } from "ui/components/shared/Text";
import { Alert, AlertItemType } from "ui/utils/Alert";
import { Modal } from "ui/utils/Modal";
import { Window } from "ui/utils/Window";

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


//
let warnAlert: AlertItemType = {
    title: 'Alert 1',
    showTime: 1500,
    type: "warning",
    body: (
        <Text font="m">Текст предупреждения!</Text>
    )
}

let errorAlert: AlertItemType = {
    title: 'Alert 2',
    showTime: 2500,
    type: "error",
    body: (
        <Text font="m">Невозможно совершить действие!</Text>
    )
}

let successAlert: AlertItemType = {
    title: 'Alert 3',
    showTime: 1000,
    type: "success",
    body: (
        <Text font="m">Успешно совершено действие!</Text>
    )
}

let infoAlert: AlertItemType = {
    title: 'Alert 4',
    showTime: 4000,
    type: "info",
    body: (
        <Text font="m">Some information</Text>
    )
}

let defaultAlert: AlertItemType = {
    title: 'Default Alert',
    showTime: 3000,
    type: "default",
    body: (
        <Text font="m">I dont know why it is...</Text>
    )
}
//


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

    const [openWindow, setWindowIsOpen] = useState(false);
    const onShowWindow = () => {
        setWindowIsOpen(true);
    }
    const onCloseWindow = () => {
        setWindowIsOpen(false);
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


    const [alerts, setAlerts] = useState<AlertItemType[]>([]);

    const timerCleanAlerts = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    useEffect(() => {
        if(alerts.length > 0){
            clearTimeout(timerCleanAlerts.current);
            timerCleanAlerts.current = setTimeout(() => {
                
                const array = [...alerts];
                const elem = array.shift()
                setAlerts(array);
            }, alerts[0].showTime ?? 1500)
        } else {
            clearTimeout(timerCleanAlerts.current);
        }
    }, [alerts])
    return (
      
            <div className={classNames(cls.UITest, {}, [className])}>
                <VStack gap="16">
                    <Button onClick={onShowWindow}>
                        <Text>show Window</Text>
                    </Button>
                    <Button onClick={onShowModal}>
                        <Text>show Modal</Text>
                    </Button>
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

                    <Button onClick={() => {
                        setAlerts([...alerts, warnAlert]);
                    }}>
                        <Text>Show alert type warning</Text>
                    </Button>
                    <Button onClick={() => {
                        setAlerts([...alerts, errorAlert]);
                    }}>
                        <Text>Show alert type error</Text>
                    </Button>
                    <Button onClick={() => {
                        setAlerts([...alerts, successAlert]);
                    }}>
                        <Text>Show alert type success</Text>
                    </Button>
                    <Button onClick={() => {
                        setAlerts([...alerts, infoAlert]);
                    }}>
                        <Text>Show alert type info</Text>
                    </Button>
                    <Button onClick={() => {
                        setAlerts([...alerts, defaultAlert]);
                    }}>
                        <Text>Show alert type default</Text>
                    </Button>
                </VStack>

                <Window 
                    isOpen={openWindow}
                    onClose={onCloseWindow}
                    content={
                    <VStack gap="16">
                        <HStack justify="center" max><Skeleton width={100} height={100} border="50%"/></HStack>
                        <Skeleton width={300} height={35} />
                        <Skeleton width={400} height={35} />
                        <Skeleton width={350} height={35} />
                        <Skeleton width={200} height={35} />
                    </VStack>
                    }
                    lazy
                    sidebar={ [
                        { desciption: <Text font="xl">Link 1</Text>, onClick: () => console.log('Click on item 1') },
                        { desciption: <Text font="xl">Link 2</Text>, onClick: () => console.log('Click on item 2') },
                        { desciption: <Text font="xl">Link 3</Text>, onClick: () => console.log('Click on item 3') },
                    ]}
                    fullscreen
                    portalElement={document.getElementById('storybook-root') ?? document.body} 
                />

                <Alert
                    portalElement={document.getElementById('storybook-root') ?? document.body} 
                    alert={alerts[0]}
                />

                <Modal 
                    isOpen={modal} 
                    lazy 
                    onClose={onCloseModal}
                    portalElement={document.getElementById('storybook-root') ?? document.body} 
                >
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