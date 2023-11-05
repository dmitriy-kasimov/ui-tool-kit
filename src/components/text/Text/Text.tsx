import React, {FC} from "react";
import { EFontColor, EFontFamily, EFontSize, TextProps } from "./types/TextProps";
import './styles/Text.scss'

export const Text: FC<TextProps> = ({
                                        children,
                                        font_size=EFontSize.FONT_SIZE_REGULAR, 
                                        font_color=EFontColor.FONT_COLOR_MAIN,  
                                        font_family=EFontFamily.FONT_FAMILY_MAIN, 
                                    }) => {
    
    let rootClasses: string[] = ['text'];
    switch (font_family) {
        case EFontFamily.FONT_FAMILY_MAIN:
            rootClasses.push('font_family_main');
            break;
        default:
            rootClasses.push('font_family_main');
            break;
    }
    
    switch (font_size) {
        case EFontSize.FONT_SIZE_TITLE:
            rootClasses.push('font_size_title');
            break;
        case EFontSize.FONT_SIZE_SUBTITLE:
            rootClasses.push('font_size_subtitle');
            break;
        case EFontSize.FONT_SIZE_IMPORTANT:
            rootClasses.push('font_size_important');
            break;
        case EFontSize.FONT_SIZE_REGULAR:
            rootClasses.push('font_size_regular');
            break;
        case EFontSize.FONT_SIZE_REGULARSMALL:
            rootClasses.push('font_size_regularsmall');
            break;
        default:
            rootClasses.push('font_size_regular');
            break;
    }

    switch (font_color) {
        case EFontColor.FONT_COLOR_MAIN:
            rootClasses.push('font_color_main');
            break;
        case EFontColor.FONT_COLOR_SECONDARY:
            rootClasses.push('font_color_secondary');
            break;
        case EFontColor.FONT_COLOR_WARNING:
            rootClasses.push('font_color_warning');
            break;
        case EFontColor.FONT_COLOR_ERROR:
            rootClasses.push('font_color_error');
            break;
        case EFontColor.FONT_COLOR_SUCCESSFULLY:
            rootClasses.push('font_color_successfully');
            break;
        case EFontColor.FONT_COLOR_INFORMATION:
            rootClasses.push('font_color_information');
            break;
        default:
            rootClasses.push('font_color_main');
            break;
    }

    return (
        <span className={rootClasses.join(' ')}>
            {children}
        </span>
    )
}