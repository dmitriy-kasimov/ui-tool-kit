## Popover

Usage example:

```typescript jsx
import { 
    Popover,
    Button,
    Icon,
    ArrowBottom,
    HStack,
    VStack,
    Skeleton
} from '@project-1114/ui-kit'


export function App(){
    return (
       <Popover
            trigger={
                <Button 
                    addonRight={
                        <Icon Svg={ArrowBottom} width={24} height={24} />
                    }
                >
                    <Text>Account</Text>
                </Button>
            }
        >
            <VStack max gap="m">
                <HStack max gap='s'>
                    <Skeleton height={70} width={70} border='50%' />
                    <Button>Avatar</Button>
                </HStack>
                <Button variant='cancel' fullWidth>Выйти</Button>
            </VStack>
        </Popover>
    )
}

```
