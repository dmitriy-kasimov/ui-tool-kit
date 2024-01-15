import React, {FC} from "react";
import './TableBody.scss'
import { classNames } from "lib/classNames/classNames";

interface TableBodyProps{
    children: React.ReactNode;

    className?:string;
}
const TableBody:FC <TableBodyProps> = ({children, className=''}) => {
  return (
    <tbody className={classNames('Table__body', {}, [className])}>
      {children}
    </tbody>
  )
};

export default TableBody;