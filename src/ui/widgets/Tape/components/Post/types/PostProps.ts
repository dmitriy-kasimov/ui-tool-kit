export interface PostProps{
    id: number;
    title: string;
    subtitle?: string | null;
    children: React.ReactNode;
    
    className?:string;
}