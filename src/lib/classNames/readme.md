## classNames

Пример использования:

(CustomButton.tsx)

```typescript jsx
import { Button, classNames } from '@tr271v0r/ui-tool-kit';
import cls from './CustomButton.module.css';

type ButtonVariant = 'cancel' | 'accept';
interface ButtonProps{
    children: React.ReactNode;

    disabled?: boolean;
    variant?: ButtonVariant;
    className?: string;
}

export function CustomButton(props){

    const {
        children,
        disabled=false,
        variant = 'primary',
        className,
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
    }

    return (
        <button 
            type="button"
            className={classNames('mainClass', mods, [className, cls[variant]])}
        >
            {children}
        </button>
    )
}

```

(CustomButton.module.css)

```css
.disabled{
 opacity: 0.7;
}

.cancel {
 background-color: red;
}
.accept {
 background-color: green;
}

```
