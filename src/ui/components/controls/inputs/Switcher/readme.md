## Switcher

Пример использования:

```typescript jsx
import { useState } from "react";

import { Switcher } from '@tr271v0r/ui-tool-kit'

export function App(){
    
    const [switcherValue, setSwitcherValue] = useState(false);

    return (
        <Switcher 
            id="1"
            value={switcherValue}
            onChange={() => setSwitcherValue(prev => !prev)}
        />
    )
}

```
