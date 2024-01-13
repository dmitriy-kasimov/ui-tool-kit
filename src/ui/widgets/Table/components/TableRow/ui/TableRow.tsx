import React, {FC} from "react";
import './TableRow.scss'

interface TableRowProps{
  children: React.ReactNode;
}

const TableRow:FC<TableRowProps> = ({children}) => {
  return (
    <tr 
      className="Table__row"
    >
      {children}
    </tr>
  )
};

export default TableRow;