import { PostProps } from "../components/Post"; 

export interface TapeProps{
    title: string;
    posts: PostProps[];

    className?:string;
}