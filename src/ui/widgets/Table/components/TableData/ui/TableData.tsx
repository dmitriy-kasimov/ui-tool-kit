import React, {FC, TableHTMLAttributes} from "react";
import './TableData.scss'
import { classNames } from "lib/classNames/classNames";

export interface TableDataProps  extends TableHTMLAttributes<HTMLTableCellElement>  {
  children: React.ReactNode;
  className?:string;
}

const TableData: FC<TableDataProps> = ({children, className='', ...otherProps}) => {
  return (
    <td 
      className={classNames('Table__data', {}, [className])}
      {...otherProps}
    >
      {children}
    </td>
  )
};

export default TableData;