import React, {FC} from "react";
import './TableContent.scss'

interface TableContentProps{
    children: React.ReactNode
}

const TableContent:FC<TableContentProps> = ({children}) => {
  return (
    <div className="Table__Scrollable">
      <div className="Table__TableContent">
        {children}
      </div>
    </div>
    
  )
};

export default TableContent;