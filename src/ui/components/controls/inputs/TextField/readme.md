## TextField

Пример использования:

```typescript jsx
import { useState } from "react";

import { TextField } from '@tr271v0r/ui-tool-kit'

export function App(){
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <TextField 
                value={login}
                onChange={setLogin}
                label="Login"
                limit={64}
            />
            <TextField 
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
