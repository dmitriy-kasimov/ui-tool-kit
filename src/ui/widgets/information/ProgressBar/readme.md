## ProgressBar

Пример использования:

```typescript jsx
import { 
    ProgressBar,
    HStack
} from '@tr271v0r/ui-tool-kit'


export function App(){
    return (
        <HStack max gap="16">
            <ProgressBar 
                max={100}
                value={100}
                length="200px"
            />

            <ProgressBar 
                max={100}
                value={100}
                type="vertical"
                length="200px"
            />
        </HStack>
    )
}

```
