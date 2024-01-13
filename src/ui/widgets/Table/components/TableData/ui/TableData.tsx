import React, {FC, TableHTMLAttributes} from "react";
import './TableData.scss'

export interface TableDataProps  extends TableHTMLAttributes<HTMLTableCellElement>  {
  children: React.ReactNode;
}

const TableData: FC<TableDataProps> = ({children, ...otherProps}) => {
  return (
    <td 
      className="Table__data"
      {...otherProps}
    >
      {children}
    </td>
  )
};

export default TableData;