import React, {FC} from "react";
import './WindowBrowser.scss'
import { WindowBrowserProps } from "./types/WindowBrowserProps";
import { WindowBrowserHeader } from "./components/WindowBrowserHeader/WindowBrowserHeader";

export const WindowBrowser: FC<WindowBrowserProps> = ({title, tabs, children}) => {
  return (
    <div className="WindowBrowser">
        <WindowBrowserHeader 
          title={title} 
          tabs={tabs}
        />
    </div>
  );
};