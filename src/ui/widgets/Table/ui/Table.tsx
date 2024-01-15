import React, {FC} from "react";
import { TableProps } from "../types/TableProps";
import { Text, textFont, textSize } from "ui/components/shared/Text";
import './Table.scss'
import { classNames } from "lib/classNames/classNames";

const Table:FC<TableProps> = ({ children, className='' }) => {
    
    return (
    <div className={classNames('Table', {}, [className])}>
      <table>
        {children}
      </table>
    </div>
  )
};

export default Table;