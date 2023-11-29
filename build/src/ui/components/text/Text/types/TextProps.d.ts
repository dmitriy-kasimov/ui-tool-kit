/// <reference types="react" />
export interface TextProps {
    font?: textFont;
    size?: textSize;
    color?: textColor;
    className?: string;
    children: React.ReactNode;
}
export declare enum textFont {
    MAIN = 0
}
export declare enum textSize {
    TITLE = 0,
    SUBTITLE = 1,
    IMPORTANT = 2,
    REGULAR = 3,
    REGULARSMALL = 4
}
export declare enum textColor {
    MAIN = 0,
    SECONDARY = 1,
    WARNING = 2,
    ERROR = 3,
    SUCCESSFULLY = 4,
    INFORMATION = 5
}
