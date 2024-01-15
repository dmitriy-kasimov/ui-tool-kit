import React, {FC} from "react";
import './TableHead.scss'
import { classNames } from "lib/classNames/classNames";

interface TableHeadProps{
    children: React.ReactNode;
    className?:string;
}
const TableHead: FC<TableHeadProps> = ({children, className=''}) => {
  return (
    <thead className={classNames('Table__head', {}, [className])}>
      {children}
    </thead>
  )
};

export default TableHead;