## Slider

Пример использования:

```typescript jsx
import { Slider } from '@tr271v0r/ui-tool-kit'

export function App(){
    const [sliderValue, setSliderValue] = useState(0);

    return (
        <Slider 
            max={10}
            min={0}
            step={1}
            value={sliderValue}
            onChange={setSliderValue}
        />
    )
}

```
