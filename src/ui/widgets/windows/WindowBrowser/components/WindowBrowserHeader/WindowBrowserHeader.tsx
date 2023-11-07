import React, {FC} from "react";
import './WindowBrowserHeader.scss'
import { WindowBrowserHeaderProps } from "./types/WindowBrowserHeaderProps";
import { WindowBrowserTitle } from "./components/WindowBrowserTitle/WindowBrowserTitle";
import { WindowBrowserTabList } from "./components/WindowBrowserTabList/WindowBrowserTabList";

export const WindowBrowserHeader: FC<WindowBrowserHeaderProps> = ({title, tabs}) => {
  return (
    <div className="WindowBrowserHeader">
        <WindowBrowserTitle text={title}/>
        <WindowBrowserTabList tabs={tabs}/>
    </div>
  );
};