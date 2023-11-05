import React, {FC} from "react";
import './WindowBrowserTitle.scss'
import { WindowBrowserTitleProps } from "./types/WindowBrowserTitleProps";
import { Text } from "components/text/Text/Text";
import { EFontSize } from "components/text/Text/types/TextProps";

export const WindowBrowserTitle: FC<WindowBrowserTitleProps> = ({text}) => {
  return (
    <span className="WindowBrowserTitle">
        <Text
          font_size={EFontSize.FONT_SIZE_TITLE}
        >
          {text}
        </Text>
    </span>
  );
};