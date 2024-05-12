## Sidebar

Usage example:

```typescript jsx
import { 
    Sidebar,
    SidebarItemType
} from '@tr271v0r/ui-tool-kit'

 const sidebarItems: SidebarItemType[] = [
    { desciption: <Text font="xl">Link1</Text>, onClick: () => console.log('Click on item 1') },
    { desciption: <Text font="xl">Link2</Text>, onClick: () => console.log('Click on item 2') },
    { desciption: <Text font="xl">Link3</Text>, onClick: () => console.log('Click on item 3') },
]

export function App(){
    return (
        <Sidebar 
            items={sidebar}
        />
    )
}

```
