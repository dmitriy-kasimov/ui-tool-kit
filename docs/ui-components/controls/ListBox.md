## ListBox

Usage example:

```typescript jsx
import { useState } from "react";

import { 
    ListBox,
    ListBoxItem,
    HStack,
    Text
} from '@project-1114/ui-kit'

const listBoxItems: ListBoxItem<string>[] = [
    { 
        content: (
            <HStack gap="s"><Skeleton height={30} width={30} border='50%'/> 
                <Text>M1RoN</Text>
            </HStack>
        ), 
        value: 'M1RoN' 
    },
    { 
        content: (
            <HStack gap="s"><Skeleton height={30} width={30} border='50%'/> 
                <Text>Alan_Masti</Text>
            </HStack>
        ), 
        value: 'Alan_Masti' 
    },
    { 
        content: (
            <HStack gap="s"><Skeleton height={30} width={30} border='50%'/> 
                <Text>Le[G]ion_kirov_43rus</Text>
            </HStack>
        ), 
        value: 'Le[G]ion_kirov_43rus' 
    },
    { 
        content: (
            <HStack gap="s"><Skeleton height={30} width={30} border='50%'/> 
                <Text>LaRGo</Text>
            </HStack>
        ), 
        value: 'LaRGo' 
    },
    { 
        content: (
            <HStack gap="s"><Skeleton height={30} width={30} border='50%'/> 
                <Text>KonfeTK@</Text>
            </HStack>
        ), 
        value: 'KonfeTK@' 
    },
];

export function App(){
    const [listBoxValue, setListBoxValue] = useState('Alan_Masti');

    return (
        <ListBox 
            value={listBoxValue}
            onChange={setListBoxValue}
            items={listBoxItems}
            label="Choose the player"
            defaultValue="Alan_Masti"
        />
    )
}

```
