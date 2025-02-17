## Tape

Usage example:

```typescript jsx
import { 
    Tape,
    PostType,
    Text
} from '@project-1114/ui-kit'

const posts: PostType[] = [
  {id: '1', title: 'The types of sizes', subtitle: '04/29/2024', description: (
    <VStack max gap="xs">
      <Text size='s' >size type S (Nunito Sans). Use for texts.</Text>
      <Text size='s' bold>size type S (Nunito Sans). Use for texts (bold).</Text>
      <Text size='m' >size type M (Nunito Sans). Use for texts.</Text>
      <Text size='m' bold>size type M (Nunito Sans). Use for texts (bold).</Text>
      <Text size='l' >size type L (Roboto). Use for titles.</Text>
      <Text size='l' bold>size type L (Roboto). Use for titles (bold).</Text>
      <Text size='xl' >size type XL (Roboto). Use for titles.</Text>
      <Text size='xl' bold>size type XL (Roboto). Use for titles (bold).</Text>
    </VStack>
  )},
  {id: '2', title: 'The color specter: main', subtitle: '04/29/2024', description: (
    <VStack max gap="xs">
      <Text size='s' >The semanthic of colors</Text>
      <Text size='s' bold>The semanthic of colors</Text>
      <Text size='m' >The semanthic of colors</Text>
      <Text size='m' bold>The semanthic of colors</Text>
      <Text size='l' >The semanthic of colors</Text>
      <Text size='l' bold>The semanthic of colors</Text>
      <Text size='xl' >The semanthic of colors</Text>
      <Text size='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
  {id: '3', title: 'The color specter: secondary', subtitle: '04/29/2024', description: (
    <VStack max gap="xs">
      <Text color="secondary" size='s' >The semanthic of colors</Text>
      <Text color="secondary" size='s' bold>The semanthic of colors</Text>
      <Text color="secondary" size='m' >The semanthic of colors</Text>
      <Text color="secondary" size='m' bold>The semanthic of colors</Text>
      <Text color="secondary" size='l' >The semanthic of colors</Text>
      <Text color="secondary" size='l' bold>The semanthic of colors</Text>
      <Text color="secondary" size='xl' >The semanthic of colors</Text>
      <Text color="secondary" size='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
  {id: '4', title: 'The color specter: warning', subtitle: '04/29/2024', description: (
    <VStack max gap="xs">
      <Text color="warning" size='s' >The semanthic of colors</Text>
      <Text color="warning" size='s' bold>The semanthic of colors</Text>
      <Text color="warning" size='m' >The semanthic of colors</Text>
      <Text color="warning" size='m' bold>The semanthic of colors</Text>
      <Text color="warning" size='l' >The semanthic of colors</Text>
      <Text color="warning" size='l' bold>The semanthic of colors</Text>
      <Text color="warning" size='xl' >The semanthic of colors</Text>
      <Text color="warning" size='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
  {id: '5', title: 'The color specter: error', subtitle: '04/29/2024', description: (
    <VStack max gap="xs">
      <Text color="error" size='s' >The semanthic of colors</Text>
      <Text color="error" size='s' bold>The semanthic of colors</Text>
      <Text color="error" size='m' >The semanthic of colors</Text>
      <Text color="error" size='m' bold>The semanthic of colors</Text>
      <Text color="error" size='l' >The semanthic of colors</Text>
      <Text color="error" size='l' bold>The semanthic of colors</Text>
      <Text color="error" size='xl' >The semanthic of colors</Text>
      <Text color="error" size='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
  {id: '6', title: 'The color specter: success', subtitle: '04/29/2024', description: (
    <VStack max gap="xs">
      <Text color="success" size='s' >The semanthic of colors</Text>
      <Text color="success" size='s' bold>The semanthic of colors</Text>
      <Text color="success" size='m' >The semanthic of colors</Text>
      <Text color="success" size='m' bold>The semanthic of colors</Text>
      <Text color="success" size='l' >The semanthic of colors</Text>
      <Text color="success" size='l' bold>The semanthic of colors</Text>
      <Text color="success" size='xl' >The semanthic of colors</Text>
      <Text color="success" size='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
  {id: '7', title: 'The color specter: info', subtitle: '04/29/2024', description: (
    <VStack max gap="xs">
      <Text color="info" size='s' >The semanthic of colors</Text>
      <Text color="info" size='s' bold>The semanthic of colors</Text>
      <Text color="info" size='m' >The semanthic of colors</Text>
      <Text color="info" size='m' bold>The semanthic of colors</Text>
      <Text color="info" size='l' >The semanthic of colors</Text>
      <Text color="info" size='l' bold>The semanthic of colors</Text>
      <Text color="info" size='xl' >The semanthic of colors</Text>
      <Text color="info" size='xl' bold>The semanthic of colors</Text>
    </VStack>
  )},
];

export function App(){
    return (
        <Tape
            header=<Text size='xl'>Новые шрифты!</Text>
            posts={posts}
        />
    )
}

```
