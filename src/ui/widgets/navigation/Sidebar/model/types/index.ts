export type SidebarItemType = {
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    desciption: string;
    onClick: () => void;
    disabled?: boolean;
}