import React, {FC} from "react";
import './WindowBrowserHeader.scss'
import { WindowBrowserHeaderProps } from "./types/WindowBrowserHeaderProps";
import { WindowBrowserTitle } from "./components/WindowBrowserTitle/WindowBrowserTitle";
import { NavBar } from "ui/widgets/NavBar";

export const WindowBrowserHeader: FC<WindowBrowserHeaderProps> = ({title, tabs}) => {
  return (
    <div className="WindowBrowserHeader">
        <WindowBrowserTitle text={title}/>
        <NavBar links={tabs}/>
    </div>
  );
};