import React, {FC} from "react";
import './TableRow.scss'
import { classNames } from "lib/classNames/classNames";

interface TableRowProps{
  children: React.ReactNode;
  className?:string;
}

const TableRow:FC<TableRowProps> = ({children, className=''}) => {
  return (
    <tr 
      className={classNames('Table__row', {}, [className])}
    >
      {children}
    </tr>
  )
};

export default TableRow;