import React, {FC} from "react";
import './WindowBrowserTitle.scss'
import { WindowBrowserTitleProps } from "./types/WindowBrowserTitleProps";
import { classNames } from "lib/classNames/classNames";

export const WindowBrowserTitle: FC<WindowBrowserTitleProps> = ({children, className=''}) => {
  return (
    <span className={classNames('WindowBrowserTitle', {}, [className])}>
       {children}
    </span>
  );
};