import React, {FC} from "react";
import './TableCaption.scss'

interface TableCaptionProps{
    children: React.ReactNode;
}

const TableCaption:FC<TableCaptionProps> = ({children}) => {
  return (
    <caption className="Table__caption">
        {children}
    </caption>
  )
};

export default TableCaption;