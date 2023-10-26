import React, {FC} from "react";
import './WindowBrowserTitle.scss'
import { WindowBrowserTitleProps } from "./types/WindowBrowserTitleProps";

export const WindowBrowserTitle: FC<WindowBrowserTitleProps> = ({text}) => {
  return (
    <span className="WindowBrowserTitle">
        {text}
    </span>
  );
};