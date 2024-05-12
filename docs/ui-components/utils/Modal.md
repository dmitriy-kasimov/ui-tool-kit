## Modal

Usage example:

```typescript jsx
import { 
    Modal,
    Text,
    VStack,
    Skeleton
} from '@tr271v0r/ui-tool-kit'

export function App(){
    
    const [modal, setModal] = useState(false);
    const onShowModal = () => {
        setModal(true);
    }
    const onCloseModal = () => {
        setModal(false);
    }

    return (
       <Modal 
            isOpen={modal} 
            lazy 
            onClose={onCloseModal}
            portalElement={document.getElementById('root') ?? document.body} 
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
    )
}

```
