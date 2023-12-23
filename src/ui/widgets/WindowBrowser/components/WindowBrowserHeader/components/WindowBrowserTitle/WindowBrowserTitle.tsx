import React, {FC} from "react";
import './WindowBrowserTitle.scss'
import { WindowBrowserTitleProps } from "./types/WindowBrowserTitleProps";
import { Text } from "ui/components/shared/Text/ui/Text";
import { textColor, textFont, textSize } from "ui/components/shared/Text/types/TextProps";

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