import React, {FC} from "react";
import './WindowBrowserTab.scss'
import { WindowBrowserTabProps } from "./types/WindowBrowserTabProps";
import { Text } from "components/text/Text/Text";
import { EFontSize } from "components/text/Text/types/TextProps";

export const WindowBrowserTab: FC<WindowBrowserTabProps> = ({name, onClick}) => {
  return (
    <span 
      onClick={onClick}  
      className="WindowBrowserTab"
    >
      <Text 
        font_size={EFontSize.FONT_SIZE_SUBTITLE}
      >
        {name}
      </Text>
    </span>
  );
};