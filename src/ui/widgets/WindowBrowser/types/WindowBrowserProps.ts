import { LinkProps } from "ui/components/links/Link";


export interface WindowBrowserProps{
    title: string;
    tabs: LinkProps[];
    children?: React.ReactNode;
}