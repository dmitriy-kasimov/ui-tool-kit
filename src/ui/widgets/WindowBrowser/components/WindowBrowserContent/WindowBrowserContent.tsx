import React, {FC} from "react";
import './WindowBrowserContent.scss'
import { WindowBrowserContentProps } from "./types/WindowBrowserContentProps";
import { classNames } from "lib/classNames/classNames";

export const WindowBrowserContent: FC<WindowBrowserContentProps> = ({children, className=''}) => {
  return (
    <div className={classNames('WindowBrowserContent', {}, [className])}>
        {children}
    </div>
  );
};