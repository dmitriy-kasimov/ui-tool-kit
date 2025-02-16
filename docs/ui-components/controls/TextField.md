## TextFieldPassword

Usage example:

```typescript jsx
import { useState } from "react";

import { TextFieldPassword } from '@tr271v0r/ui-tool-kit'

export function App(){
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <TextFieldPassword 
                value={login}
                onChange={setLogin}
                label="Login"
                limit={64}
            />
            <TextFieldPassword 
                value={password}
                onChange={setPassword}
                label="Password"
                limit={128}
                masked
            />
        </>
    )
}

```
