import React, {FC} from "react";
import './NavBar.scss'
import { NavBarProps } from "../types/NavBarProps";
import './NavBar.scss'
import { Link } from "ui/components/controls/links/Link";
import { classNames } from "lib/classNames/classNames";

export const NavBar: FC<NavBarProps> = ({links, className=''}) => {
  return (
    <ul className={classNames('NavBar', {}, [className])}>
        {links.map(link => 
          <li 
            key={link.name}
            className="NavBar__link"
          >
            <Link 
              name={link.name}
              onClick={link.onClick}
            />
          </li>)}
    </ul>
  );
};