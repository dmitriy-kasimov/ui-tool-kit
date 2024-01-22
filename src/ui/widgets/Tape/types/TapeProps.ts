import { PostProps } from "../components/Post"; 

export interface TapeProps{
    title: string;
    children: React.ReactNode;

    className?:string;
}