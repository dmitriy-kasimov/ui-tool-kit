## Tape

Пример использования:

```typescript jsx
import { 
    Tape,
    PostType
} from '@tr271v0r/ui-tool-kit'

const posts: PostType[] = [
  {id: '1', title: 'The types of fonts', subtitle: '04/29/2024', description: (
    <VStack max gap="4">
      <Text font='s' >Font type S (Nunito Sans). Use for texts.</Text>
      <Text font='s' bold>Font type S (Nunito Sans). Use for texts (bold).</Text>
      <Text font='m' >Font type M (Nunito Sans). Use for texts.</Text>
      <Text font='m' bold>Font type M (Nunito Sans). Use for texts (bold).</Text>
      <Text font='l' >Font type L (Roboto). Use for titles.</Text>
      <Text font='l' bold>Font type L (Roboto). Use for titles (bold).</Text>
      <Text font='xl' >Font type XL (Roboto). Use for titles.</Text>
      <Text font='xl' bold>Font type XL (Roboto). Use for titles (bold).</Text>
    </VStack>
  )},
  {id: '2', title: 'The color specter: main', subtitle: '04/29/2024', description: (
    <VStack max gap="4">
      <Text font='s' >The semanthic of colors</Text>
      <Text font='s' bold>The semanthic of colors</Text>
      <Text font='m' >The semanthic of colors</Text>
      <Text font='m' bold>The semanthic of colors</Text>
      <Text font='l' >The semanthic of colors</Text>
      <Text font='l' bold>The semanthic of colors</Text>
      <Text font='xl' >The semanthic of colors</Text>
      <Text font='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
  {id: '3', title: 'The color specter: secondary', subtitle: '04/29/2024', description: (
    <VStack max gap="4">
      <Text color="secondary" font='s' >The semanthic of colors</Text>
      <Text color="secondary" font='s' bold>The semanthic of colors</Text>
      <Text color="secondary" font='m' >The semanthic of colors</Text>
      <Text color="secondary" font='m' bold>The semanthic of colors</Text>
      <Text color="secondary" font='l' >The semanthic of colors</Text>
      <Text color="secondary" font='l' bold>The semanthic of colors</Text>
      <Text color="secondary" font='xl' >The semanthic of colors</Text>
      <Text color="secondary" font='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
  {id: '4', title: 'The color specter: warning', subtitle: '04/29/2024', description: (
    <VStack max gap="4">
      <Text color="warning" font='s' >The semanthic of colors</Text>
      <Text color="warning" font='s' bold>The semanthic of colors</Text>
      <Text color="warning" font='m' >The semanthic of colors</Text>
      <Text color="warning" font='m' bold>The semanthic of colors</Text>
      <Text color="warning" font='l' >The semanthic of colors</Text>
      <Text color="warning" font='l' bold>The semanthic of colors</Text>
      <Text color="warning" font='xl' >The semanthic of colors</Text>
      <Text color="warning" font='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
  {id: '5', title: 'The color specter: error', subtitle: '04/29/2024', description: (
    <VStack max gap="4">
      <Text color="error" font='s' >The semanthic of colors</Text>
      <Text color="error" font='s' bold>The semanthic of colors</Text>
      <Text color="error" font='m' >The semanthic of colors</Text>
      <Text color="error" font='m' bold>The semanthic of colors</Text>
      <Text color="error" font='l' >The semanthic of colors</Text>
      <Text color="error" font='l' bold>The semanthic of colors</Text>
      <Text color="error" font='xl' >The semanthic of colors</Text>
      <Text color="error" font='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
  {id: '6', title: 'The color specter: success', subtitle: '04/29/2024', description: (
    <VStack max gap="4">
      <Text color="success" font='s' >The semanthic of colors</Text>
      <Text color="success" font='s' bold>The semanthic of colors</Text>
      <Text color="success" font='m' >The semanthic of colors</Text>
      <Text color="success" font='m' bold>The semanthic of colors</Text>
      <Text color="success" font='l' >The semanthic of colors</Text>
      <Text color="success" font='l' bold>The semanthic of colors</Text>
      <Text color="success" font='xl' >The semanthic of colors</Text>
      <Text color="success" font='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
  {id: '7', title: 'The color specter: info', subtitle: '04/29/2024', description: (
    <VStack max gap="4">
      <Text color="info" font='s' >The semanthic of colors</Text>
      <Text color="info" font='s' bold>The semanthic of colors</Text>
      <Text color="info" font='m' >The semanthic of colors</Text>
      <Text color="info" font='m' bold>The semanthic of colors</Text>
      <Text color="info" font='l' >The semanthic of colors</Text>
      <Text color="info" font='l' bold>The semanthic of colors</Text>
      <Text color="info" font='xl' >The semanthic of colors</Text>
      <Text color="info" font='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
];

export function App(){
    return (
        <Tape
            title="Шрифтов завезли!"
            posts={posts}
        />
    )
}

```
