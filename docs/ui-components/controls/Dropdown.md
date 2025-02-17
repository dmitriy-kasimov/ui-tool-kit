## Dropdown

Usage example:

```typescript jsx
import { 
    Dropdown,
    DropdownItem,
    Button,
    Icon,
    Text,
    HStack,
    Skeleton,
    ArrowBottom
} from '@project-1114/ui-kit'

const dropdownItems: DropdownItem[] = [
    { 
        content: (
            <HStack gap="s">
                <Skeleton height={30} width={30} border='50%'/> 
                <Text>Добавить</Text>
            </HStack>
        ), 
        onClick: () => console.log('Add') 
    },
    { 
        content: (
            <HStack gap="s"><Skeleton height={30} width={30} border='50%'/> 
            <Text>Изменить</Text></HStack>
        ), 
        onClick: () => console.log('Changed') 
    },
    { 
        content: (
            <HStack gap="s"><Skeleton height={30} width={30} border='50%'/> 
            <Text color="error">Удалить</Text></HStack>
        ), 
        onClick: () => console.log('Removed') 
    },
];

export function App(){
    return (
       <Dropdown 
            trigger={
                <Button 
                    addonRight = {
                        <Icon Svg={ArrowBottom} width={24} height={24} />
                    }
                >
                    <Text>Dropdown</Text>
                </Button>
            }
            items={dropdownItems}
        />
    )
}

```
