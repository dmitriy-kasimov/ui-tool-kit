## TextArea

Usage example:

```typescript jsx
import { useState } from "react";

import { TextArea } from '@project-1114/ui-kit'

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
