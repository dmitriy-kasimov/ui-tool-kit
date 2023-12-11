export interface TextProps{
    font?: textFont;
    size?: textSize;
    color?: textColor;

    className?: string;

    children: React.ReactNode;
}

// Элементам этих enum есть СООТВЕТСТВУЮЩИЕ css перменные в конфигах шрифтов

// Перечисление семейств используемых шрифтов
export enum textFont{
    MAIN,
    TITLE
}

// Перечисление размеров шрифтов
export enum textSize {
    TITLE,
    SUBTITLE,

    IMPORTANT,
    REGULAR,
    REGULARSMALL,
}

// Цвета
export enum textColor{
    MAIN,
    SECONDARY,

    WARNING,
    ERROR,
    SUCCESSFULLY,
    INFORMATION,
}