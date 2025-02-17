## Slider

Usage example:

```typescript jsx
import { Slider } from '@project-1114/ui-kit'

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
