## TextArea

Пример использования:

```typescript jsx
import { useState } from "react";

import { TextArea } from '@tr271v0r/ui-tool-kit'

export function App(){
    const [textAreaValue, setTextAreaValue] = useState('');

    return (
        <TextArea 
            value={textAreaValue}
            onChange={setTextAreaValue}
            label="TextArea"
            limit={64}
        />
    )
}

```
