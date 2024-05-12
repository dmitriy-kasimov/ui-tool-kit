## Modal

Usage example:

```typescript jsx
import { 
    ModalConfirm,
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
       <ModalConfirm 
            isOpen={modal} 
            lazy 
            onClose={onCloseModal}
            portalElement={document.getElementById('root') ?? document.body} 
        >
            <Text>Вы уверены, что хотите выполнить данное действие?</Text>
        </Modal>
    )
}

```
