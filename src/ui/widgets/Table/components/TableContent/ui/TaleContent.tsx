import React, {FC} from "react";
import './TableContent.scss'
import { classNames } from "lib/classNames/classNames";

interface TableContentProps{
    children: React.ReactNode
    className?:string;
}

const TableContent:FC<TableContentProps> = ({children, className=''}) => {
  return (
    <div className={classNames('Table__Scrollable', {}, [className])}>
      <div className="Table__TableContent">
        {children}
      </div>
    </div>
    
  )
};

export default TableContent;