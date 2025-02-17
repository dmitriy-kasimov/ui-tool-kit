## Button

Usage example:

```typescript jsx
import { Button } from '@project-1114/ui-kit'

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
