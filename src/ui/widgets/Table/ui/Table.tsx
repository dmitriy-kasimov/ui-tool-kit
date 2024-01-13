import React, {FC} from "react";
import { TableProps } from "../types/TableProps";
import { Text, textFont, textSize } from "ui/components/shared/Text";
import './Table.scss'

const Table:FC<TableProps> = ({ children }) => {
    
    return (
    <div className="Table">
      <table>
        {children}
      </table>
    </div>
  )
};

export default Table;