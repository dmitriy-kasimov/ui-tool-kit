import React, {FC} from "react";
import './WindowBrowserTab.scss'
import { WindowBrowserTabProps } from "./types/WindowBrowserTabProps";

export const WindowBrowserTab: FC<WindowBrowserTabProps> = ({name, onClick}) => {
  return (
    <span 
      onClick={onClick}  
      className="WindowBrowserTab"
    >
        {name}
    </span>
  );
};