import React, {FC} from "react";
import { TextProps, textColor, textFont, textSize } from "../types/TextProps";
import '../styles/Text.scss'

export const Text: FC<TextProps> = ({
                                        children,
                                        size=textSize.REGULAR, 
                                        color=textColor.MAIN,  
                                        font=textFont.MAIN, 
                                    }) => {
    
    let rootClasses: string[] = ['Text'];
    switch (font) {
        case textFont.MAIN:
            rootClasses.push('text_font_main');
            break;
        default:
            rootClasses.push('text_font_main');
            break;
    }
    
    switch (size) {
        case textSize.TITLE:
            rootClasses.push('text_size_title');
            break;
        case textSize.SUBTITLE:
            rootClasses.push('text_size_subtitle');
            break;
        case textSize.IMPORTANT:
            rootClasses.push('text_size_important');
            break;
        case textSize.REGULAR:
            rootClasses.push('text_size_regular');
            break;
        case textSize.REGULARSMALL:
            rootClasses.push('text_size_regularsmall');
            break;
        default:
            rootClasses.push('text_size_regular');
            break;
    }

    switch (color) {
        case textColor.MAIN:
            rootClasses.push('text_color_main');
            break;
        case textColor.SECONDARY:
            rootClasses.push('text_color_secondary');
            break;
        case textColor.WARNING:
            rootClasses.push('text_color_warning');
            break;
        case textColor.ERROR:
            rootClasses.push('text_color_error');
            break;
        case textColor.SUCCESSFULLY:
            rootClasses.push('text_color_successfully');
            break;
        case textColor.INFORMATION:
            rootClasses.push('text_color_information');
            break;
        default:
            rootClasses.push('text_color_main');
            break;
    }

    return (
        <span className={rootClasses.join(' ')}>
            {children}
        </span>
    )
}