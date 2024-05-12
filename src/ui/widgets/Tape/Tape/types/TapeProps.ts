import { ReactElement } from "react";
import { PostType } from "../../Post/types/PostProps";

export interface TapeProps{
    header: ReactElement;
    posts: PostType[];

    maxHeightContent?: string;
    maxWidthContent?: string;
    className?:string;
}