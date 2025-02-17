## ProgressBar

Usage example:

```typescript jsx
import { 
    ProgressBar,
    HStack
} from '@project-1114/ui-kit'


export function App(){
    return (
        <HStack max gap="m">
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
