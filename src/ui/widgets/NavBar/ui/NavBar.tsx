import React, {FC, memo} from "react";
import './NavBar.scss'
import { NavBarProps } from "../types/NavBarProps";
import './NavBar.scss'
import { Link } from "ui/components/controls/links/Link";
import { classNames } from "lib/classNames/classNames";

export const NavBar: FC<NavBarProps> = memo(({children, className=''}) => {
  return (
    <div className={classNames('NavBar', {}, [className])}>
       {children}
    </div>
  );
});