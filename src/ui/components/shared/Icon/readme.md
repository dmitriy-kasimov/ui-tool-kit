## Disclosure

Пример использования:

```typescript jsx
import { 
    VStack,
    Skeleton,
    Disclosure, 
    DisclousureItem
} from '@tr271v0r/ui-tool-kit'

 const disclosureItems: DisclousureItem[] = [
    {
        title: 'The rule #1', 
        description: (
            <Text>Sometnhing very looooooooooooooooong </Text>
        ),
    },
    {
        title: 'The rule #2 [main rule]', 
        description: (
            <VStack gap='8' max>
                <Skeleton width={150} height={40}/>
                <Skeleton width={250} height={30}/>
                <Skeleton width={250} height={30}/>
                <Skeleton width={250} height={250}/>
                <Skeleton width={250} height={30}/>
            </VStack>
        ),
    },
    {
        title: 'Try to open me ))', 
        description: (
            <Text>Text inside disabled tab</Text>
        ),
        disabled: true
    },
];

export function App(){
    return (
        <Disclosure
            items={disclosureItems}
            maxWidth="300px"
        />
    )
}

```
