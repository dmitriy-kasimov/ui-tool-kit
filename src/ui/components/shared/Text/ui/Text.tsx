import React, {FC, memo} from "react";
import { TextProps, textColor, textFont, textSize } from "../types/TextProps";
import cls from'../styles/Text.module.scss'
import { classNames } from "lib/classNames/classNames";

export const Text: FC<TextProps> = memo(({
                                        size=textSize.REGULAR, 
                                        color=textColor.MAIN,  
                                        font=textFont.MAIN, 

                                        className='',

                                        children,
                                    }) => {
    
    let rootClasses: string[] = [];
    rootClasses.push(className);
    
    switch (font) {
        case textFont.MAIN:
            rootClasses.push(cls.text_font_main);
            break;
        case textFont.TITLE:
            rootClasses.push(cls.text_font_title);
            break;
        default:
            rootClasses.push(cls.text_font_main);
            break;
    }
    
    switch (size) {
        case textSize.TITLE:
            rootClasses.push(cls.text_size_title);
            break;
        case textSize.SUBTITLE:
            rootClasses.push(cls.text_size_subtitle);
            break;
        case textSize.IMPORTANT:
            rootClasses.push(cls.text_size_important);
            break;
        case textSize.REGULAR:
            rootClasses.push(cls.text_size_regular);
            break;
        case textSize.REGULARSMALL:
            rootClasses.push(cls.text_size_regularsmall);
            break;
        default:
            rootClasses.push(cls.text_size_regular);
            break;
    }

    switch (color) {
        case textColor.MAIN:
            rootClasses.push(cls.text_color_main);
            break;
        case textColor.SECONDARY:
            rootClasses.push(cls.text_color_secondary);
            break;
        case textColor.WARNING:
            rootClasses.push(cls.text_color_warning);
            break;
        case textColor.ERROR:
            rootClasses.push(cls.text_color_error);
            break;
        case textColor.SUCCESSFULLY:
            rootClasses.push(cls.text_color_successfully);
            break;
        case textColor.INFORMATION:
            rootClasses.push(cls.text_color_information);
            break;
        default:
            rootClasses.push(cls.text_color_main);
            break;
    }

    return (
        <span className={classNames(cls.Text, {}, rootClasses)}>
            {children}
        </span>
    )
});