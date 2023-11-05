export interface TextProps{
    children: React.ReactNode;

    font_family?: EFontFamily;
    font_size?: EFontSize;
    font_color?: EFontColor;
}

// Элементам этих enum есть СООТВЕТСТВУЮЩИЕ css перменные в конфигах шрифтов

// Перечисление семейств используемых шрифтов
export enum EFontFamily{
    FONT_FAMILY_MAIN,
}

// Перечисление размеров шрифтов
export enum EFontSize{
    FONT_SIZE_TITLE,
    FONT_SIZE_SUBTITLE,

    FONT_SIZE_IMPORTANT,
    FONT_SIZE_REGULAR,
    FONT_SIZE_REGULARSMALL,
}

// Цвета
export enum EFontColor{
    FONT_COLOR_MAIN,
    FONT_COLOR_SECONDARY,

    FONT_COLOR_WARNING,
    FONT_COLOR_ERROR,
    FONT_COLOR_SUCCESSFULLY,
    FONT_COLOR_INFORMATION,
}