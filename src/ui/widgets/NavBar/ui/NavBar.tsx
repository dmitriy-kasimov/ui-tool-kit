import React, {FC} from "react";
import './NavBar.scss'
import { NavBarProps } from "../types/NavBarProps";
import './NavBar.scss'
import { Link } from "ui/components/controls/links/Link";

export const NavBar: FC<NavBarProps> = ({links}) => {
  return (
    <div className="NavBar">
        {links.map(link => 
          <Link 
            key={link.name}
            active={link.active}
            name={link.name}
            onClick={link.onClick}
          />)}
    </div>
  );
};