import { FC } from 'react';
import './MyButton.css';
export interface MyButtonProps {
    color: string;
    big?: boolean;
    children: string;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
