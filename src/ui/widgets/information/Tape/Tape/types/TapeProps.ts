import { PostType } from "../../Post/types/PostProps";

export interface TapeProps{
    title: string;
    posts: PostType[];

    maxHeightContent?: string;
    maxWidthContent?: string;
    className?:string;
}