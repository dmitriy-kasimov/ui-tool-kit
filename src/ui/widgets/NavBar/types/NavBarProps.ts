import { classNames } from "lib/classNames/classNames";
import { LinkProps } from "ui/components/controls/links/Link";

export interface NavBarProps{
    links: LinkProps [];

    className?:string;
}