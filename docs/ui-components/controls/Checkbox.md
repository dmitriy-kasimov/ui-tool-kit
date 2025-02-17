## Checkbox

Usage example:

```typescript jsx
import { useState } from "react";
import { Checbox } from '@project-1114/ui-kit'


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
