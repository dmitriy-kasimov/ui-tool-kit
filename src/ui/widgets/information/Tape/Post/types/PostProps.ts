export type PostType = {
    id: string;
    title: string;
    subtitle?: string | null;
    description: React.ReactNode;
}

export interface PostProps{
    post: PostType;
    
    className?:string;
}