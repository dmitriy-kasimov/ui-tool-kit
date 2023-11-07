import React, {FC} from "react";
import './WindowBrowserTabList.scss'
import { WindowBrowserTabListProps } from "./types/WindowBrowserTabListProps";
import { WindowBrowserTab } from "./components/WindowBrowserTab/WindowBrowserTab";
import './WindowBrowserTabList.scss'

export const WindowBrowserTabList: FC<WindowBrowserTabListProps> = ({tabs}) => {
  return (
    <div className="WindowBrowserTabList">
        {tabs.map(tab => 
          <WindowBrowserTab 
            key={tab.name}
            name={tab.name}
            onClick={tab.onClick}
          />)}
    </div>
  );
};