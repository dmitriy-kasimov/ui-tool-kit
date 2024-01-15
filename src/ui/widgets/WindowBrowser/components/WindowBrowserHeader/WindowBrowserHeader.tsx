import React, {FC} from "react";
import './WindowBrowserHeader.scss'
import { WindowBrowserHeaderProps } from "./types/WindowBrowserHeaderProps";
import { WindowBrowserTitle } from "./components/WindowBrowserTitle/WindowBrowserTitle";
import { NavBar } from "ui/widgets/NavBar";
import { classNames } from "lib/classNames/classNames";

export const WindowBrowserHeader: FC<WindowBrowserHeaderProps> = ({title, tabs, className=''}) => {
  return (
    <div className={classNames('WindowBrowserHeader', {}, [className])}>
        <WindowBrowserTitle text={title}/>
        <NavBar links={tabs}/>
    </div>
  );
};