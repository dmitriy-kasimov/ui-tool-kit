import React, {FC} from "react";
import './WindowBrowserContent.scss'
import { WindowBrowserContentProps } from "./types/WindowBrowserContentProps";

export const WindowBrowserContent: FC<WindowBrowserContentProps> = ({children}) => {
  return (
    <div className="WindowBrowserContent">
        {children}
    </div>
  );
};