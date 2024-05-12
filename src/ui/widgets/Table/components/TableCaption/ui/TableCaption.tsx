import React, {FC} from "react";
import './TableCaption.scss'
import { classNames } from "lib/classNames/classNames";

interface TableCaptionProps{
    children: React.ReactNode;
    className?:string;
}

const TableCaption:FC<TableCaptionProps> = ({children, className=''}) => {
  return (
    <span className={classNames('Table__caption', {}, [className])}>
        {children}
    </span>
  )
};

export default TableCaption;