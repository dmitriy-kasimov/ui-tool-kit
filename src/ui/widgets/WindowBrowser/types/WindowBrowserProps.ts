import { LinkProps } from "ui/components/controls/links/Link";


export interface WindowBrowserProps{
    title: string;
    tabs: LinkProps[];
    children?: React.ReactNode;
}