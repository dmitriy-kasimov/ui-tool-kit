## TextFieldPassword

Usage example:

```typescript jsx
import { useState } from "react";
import { TextFieldPassword } from '@project-1114/ui-kit'

export function App(){
    const [password, setPassword] = useState('');

    return (
        <TextFieldPassword
            value={password}
            onChange={setPassword}
            placeholder={'Enter the password'}
        />
    )
}

```
