## Switcher

Usage example:

```typescript jsx
import { useState } from "react";

import { Switcher } from '@project-1114/ui-kit'

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
