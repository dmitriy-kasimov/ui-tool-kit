## Button

Пример использования:

```typescript jsx
import { Button } from '@tr271v0r/ui-tool-kit'

export function App(){
    return (
        <>
            <Button>
                <Text>Click on me</Text>
            </Button>
            <Button disabled>
                <Text>You can't click on me</Text>
            </Button>
            <Button variant="accept">
                <Text>Approve the all changes</Text>
            </Button>
        </>
    )
}

```
