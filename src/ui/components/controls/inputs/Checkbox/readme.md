## Checkbox

Пример использования:

```typescript jsx
import { useState } from "react";
import { Checbox } from '@tr271v0r/ui-tool-kit'


export function App(){
    const [checkbox, setCheckbox] = useState(false);

    return (
       <Checkbox 
            id="rule"
            checked={checkbox}
            onChange={() => setCheckbox(prev => !prev)}
        >
            <Text>Check the rules</Text>
        </Checkbox>
    )
}

```
