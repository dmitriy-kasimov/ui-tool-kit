import React, {FC} from "react";
import './TableHead.scss'

interface TableHeadProps{
    children: React.ReactNode;
}
const TableHead: FC<TableHeadProps> = ({children}) => {
  return (
    <thead className="Table__head">
      {children}
    </thead>
  )
};

export default TableHead;