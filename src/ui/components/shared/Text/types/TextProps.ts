export interface TextProps{
    font?: textFont;
    size?: textSize;
    color?: textColor;

    className?: string;

    children: React.ReactNode;
}

// Элементам этих enum есть СООТВЕТСТВУЮЩИЕ css перменные в конфигах шрифтов

// Типы шрифтов по назначению
export type textFont = 'main' | 'title';

// Перечисление размеров шрифтов
export type textSize = 'title' | 'subtitle' | 'important' | 'regular' | 'regularsmall';

// Типы шрифтов по цвету
export type textColor = 'main' | 'secondary' | 'warning' | 'error' | 'success' | 'info';