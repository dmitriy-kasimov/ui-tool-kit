import React, {FC} from "react";
import './WindowBrowser.scss'
import { WindowBrowserProps } from "../types/WindowBrowserProps";
import { WindowBrowserHeader } from "../components/WindowBrowserHeader/WindowBrowserHeader";
import { WindowBrowserContent } from "../components/WindowBrowserContent/WindowBrowserContent";
import { classNames } from "lib/classNames/classNames";

export const WindowBrowser: FC<WindowBrowserProps> = ({title, tabs, children, className=''}) => {
  return (
    <div className={classNames('WindowBrowser', {}, [className])}>
        <WindowBrowserHeader 
          title={title} 
          tabs={tabs}
        />

        <WindowBrowserContent>
          {children}
        </WindowBrowserContent>
    </div>
  );
};