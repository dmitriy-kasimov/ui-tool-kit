import React, {FC} from "react";
import './WindowBrowser.scss'
import { WindowBrowserProps } from "../types/WindowBrowserProps";
import { WindowBrowserHeader } from "../components/WindowBrowserHeader/WindowBrowserHeader";
import { WindowBrowserContent } from "../components/WindowBrowserContent/WindowBrowserContent";
import { classNames } from "lib/classNames/classNames";

export const WindowBrowser: FC<WindowBrowserProps> = ({title, links, children, fullscreen=false, className=''}) => {
  return (
    <div className={classNames('WindowBrowser', {WindowBrowser__fullscreen: fullscreen}, [className])}>
        <WindowBrowserHeader 
          title={title} 
          tabs={links}
        />

        <WindowBrowserContent>
          {children}
        </WindowBrowserContent>
    </div>
  );
};