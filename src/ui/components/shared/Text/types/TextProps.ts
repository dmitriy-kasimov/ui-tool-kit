export interface TextProps{
    font?: textFont;
    color?: textColor;
    bold?: boolean;

    className?: string;

    children: React.ReactNode;
}

// Элементам этих enum есть СООТВЕТСТВУЮЩИЕ css перменные в конфигах шрифтов

// Перечисление размеров шрифтов
export type textFont = 's' | 'm' | 'l' | 'xl';

// Типы шрифтов по цвету
export type textColor = 'main' | 'secondary' | 'warning' | 'error' | 'success' | 'info';