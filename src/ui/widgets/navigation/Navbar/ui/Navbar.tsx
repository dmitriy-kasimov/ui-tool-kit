import React, {FC, memo} from "react";
import { NavBarProps } from "../types/NavbarProps";
import cls from './Navbar.module.scss'
import { classNames } from "lib/classNames/classNames";

export const Navbar: FC<NavBarProps> = memo(({children, className=''}) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
       {children}
    </div>
  );
});