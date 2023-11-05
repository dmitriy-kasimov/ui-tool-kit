import { WindowBrowserContentProps } from "../components/WindowBrowserContent/types/WindowBrowserContentProps";
import { WindowBrowserTabProps } from "../components/WindowBrowserHeader/components/WindowBrowserTabList/components/WindowBrowserTab/types/WindowBrowserTabProps";


export interface WindowBrowserProps{
    title: string;
    tabs: WindowBrowserTabProps[];
    children?: React.ReactNode;
}