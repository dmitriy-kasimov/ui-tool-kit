import React, {FC} from "react";
import './WindowBrowserTitle.scss'
import { WindowBrowserTitleProps } from "./types/WindowBrowserTitleProps";
import { Text } from "ui/components/shared/Text/ui/Text";
import { textColor, textFont, textSize } from "ui/components/shared/Text/types/TextProps";
import { classNames } from "lib/classNames/classNames";

export const WindowBrowserTitle: FC<WindowBrowserTitleProps> = ({text, className=''}) => {
  return (
    <span className={classNames('WindowBrowserTitle', {}, [className])}>
        <Text
          font={textFont.TITLE}
          size={textSize.TITLE}
        >
          {text}
        </Text>
    </span>
  );
};