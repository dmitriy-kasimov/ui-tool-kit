import { PostType } from "../../Post/types/PostProps";

export interface TapeProps{
    title: string;
    posts: PostType[];

    className?:string;
}