import React, {FC} from "react";
import './WindowBrowserTab.scss'
import { WindowBrowserTabProps } from "./types/WindowBrowserTabProps";

export const WindowBrowserTab: FC<WindowBrowserTabProps> = ({text}) => {
  return (
    <span className="WindowBrowserTab">
        {text}
    </span>
  );
};