## Alert

Usage example:

```typescript jsx
import { MutableRefObject, useEffect, useRef, useState } from "react";

import { 
    Alert,
    AlertItemType,
    VStack
} from '@project-1114/ui-kit'

const warnAlert: AlertItemType = {
    title: 'Alert 1',
    showTime: 1500,
    type: "warning",
    body: (
        <Text size="m">Текст предупреждения!</Text>
    )
}

const errorAlert: AlertItemType = {
    title: 'Alert 2',
    showTime: 2500,
    type: "error",
    body: (
        <Text size="m">Невозможно совершить действие!</Text>
    )
}

const successAlert: AlertItemType = {
    title: 'Alert 3',
    showTime: 1000,
    type: "success",
    body: (
        <Text size="m">Успешно совершено действие!</Text>
    )
}

const infoAlert: AlertItemType = {
    title: 'Alert 4',
    showTime: 4000,
    type: "info",
    body: (
        <Text size="m">Some information</Text>
    )
}

const defaultAlert: AlertItemType = {
    title: 'Default Alert',
    showTime: 3000,
    type: "default",
    body: (
        <Text size="m">I dont know why it is...</Text>
    )
}

export function App(){
    
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
        <>
            <VStack gap="m">
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
            <Alert
                portalElement={document.getElementById('root') ?? document.body} 
                alert={alerts[0]}
            />
        </>
    )
}

```
