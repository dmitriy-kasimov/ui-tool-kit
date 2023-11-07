import React, {FC} from "react";
import './WindowBrowserTitle.scss'
import { WindowBrowserTitleProps } from "./types/WindowBrowserTitleProps";
import { Text } from "components/text/Text/ui/Text";
import { textColor, textFont, textSize } from "components/text/Text/types/TextProps";

export const WindowBrowserTitle: FC<WindowBrowserTitleProps> = ({text}) => {
  return (
    <span className="WindowBrowserTitle">
        <Text
          size={textSize.TITLE}
        >
          {text}
        </Text>
    </span>
  );
};