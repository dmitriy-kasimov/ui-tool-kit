## Window

Пример использования:

```typescript jsx
import { 
    Window,
    Text,
    VStack,
    Skeleton,
} from '@tr271v0r/ui-tool-kit'

export function App(){
    const [openWindow, setWindowIsOpen] = useState(false);
    const onShowWindow = () => {
        setWindowIsOpen(true);
    }
    const onCloseWindow = () => {
        setWindowIsOpen(false);
    }

    return (
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
                { desciption: <Text font="xl">Link1</Text>, onClick: () => console.log('Click on item 1') },
                { desciption: <Text font="xl">Link2</Text>, onClick: () => console.log('Click on item 2') },
                { desciption: <Text font="xl">Link3</Text>, onClick: () => console.log('Click on item 3') },
            ]}
            fullscreen
            portalElement={document.getElementById('root') ?? document.body} 
        />
    )
}

```
