## TextFieldPassword

Usage example:

```typescript jsx
import { useState } from "react";
import { TextField } from '@project-1114/ui-kit'

export function App(){
    const [text, setText] = useState('');

    return (
        <TextField
            value={text}
            onChange={setText}
            placeholder={'Enter some text'}
        />
    )
}

```
