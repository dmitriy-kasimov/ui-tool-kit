import React, {FC} from "react";
import './TableBody.scss'

interface TableBodyProps{
    children: React.ReactNode;
}
const TableBody:FC <TableBodyProps> = ({children}) => {
  return (
    <tbody className="Table__body">
      {children}
    </tbody>
  )
};

export default TableBody;