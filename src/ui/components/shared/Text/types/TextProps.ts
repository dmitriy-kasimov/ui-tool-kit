export interface TextProps{
    size?: textSize;
    color?: textColor;
    bold?: boolean;

    className?: string;

    children: React.ReactNode;
}

// Элементам этих enum есть СООТВЕТСТВУЮЩИЕ css перменные в конфигах шрифтов

// Перечисление размеров шрифтов
export type textSize = 's' | 'm' | 'l' | 'xl';

// Типы шрифтов по цвету
export type textColor = 'main' | 'secondary' | 'warning' | 'error' | 'success' | 'info';