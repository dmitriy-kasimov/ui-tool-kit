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
} from '@tr271v0r/ui-tool-kit'


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
            <VStack max gap="16">
                <HStack max gap='8'>
                    <Skeleton height={70} width={70} border='50%' />
                    <Button>Avatar</Button>
                </HStack>
                <Button variant='cancel' fullWidth>Выйти</Button>
            </VStack>
        </Popover>
    )
}

```
