export type PostType = {
    id: string;
    title: string;
    subtitle?: string | null;
    description: React.ReactNode;

    maxWidth?: string;
}

export interface PostProps{
    post: PostType;
    
    className?:string;
}