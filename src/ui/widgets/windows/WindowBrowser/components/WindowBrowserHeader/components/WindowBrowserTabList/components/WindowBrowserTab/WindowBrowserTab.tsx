import React, {FC} from "react";
import './WindowBrowserTab.scss'
import { WindowBrowserTabProps } from "./types/WindowBrowserTabProps";
import { Text } from "ui/components/text/Text/ui/Text";
import { textColor, textFont, textSize } from "ui/components/text/Text/types/TextProps";

export const WindowBrowserTab: FC<WindowBrowserTabProps> = ({name, onClick}) => {
  return (
    <span 
      onClick={onClick}  
      className="WindowBrowserTab"
    >
      <Text
        size={textSize.SUBTITLE}
      >
        {name}
      </Text>
    </span>
  );
};