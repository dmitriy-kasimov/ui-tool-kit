## RadioGroup

Usage example:

```typescript jsx
import { useState } from "react";

import { 
    RadioGroupOptionType,
    RadioGroup
} from '@project-1114/ui-kit'

const radioGroupOptions: RadioGroupOptionType[] = [
    {value: 'admin', description: 'Администратор'},
    {value: 'architecturer', description: 'Архитектор', defaultChecked: true},
    {value: 'root', description: 'root', disabled:true},
];

export function App(){

    const [value, setValue] = useState('architecturer');
    const handleChangeValue= (value: string) =>{
      setValue(value)
    }

    return (
       <RadioGroup 
            name={'admins'}
            options={radioGroupOptions}
            onChange={handleChangeValue}
        />
    )
}

```
