import React, {FC} from "react";
import './WindowBrowserTitle.scss'
import { WindowBrowserTitleProps } from "./types/WindowBrowserTitleProps";
import { Text } from "ui/components/text/Text/ui/Text";
import { textColor, textFont, textSize } from "ui/components/text/Text/types/TextProps";

export const WindowBrowserTitle: FC<WindowBrowserTitleProps> = ({text}) => {
  return (
    <span className="WindowBrowserTitle">
        <Text
          font={textFont.TITLE}
          size={textSize.TITLE}
        >
          {text}
        </Text>
    </span>
  );
};