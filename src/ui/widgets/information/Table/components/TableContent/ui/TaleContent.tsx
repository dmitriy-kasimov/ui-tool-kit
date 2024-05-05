import React, {FC} from "react";
import './TableContent.scss'
import { classNames } from "lib/classNames/classNames";

interface TableContentProps{
  children: React.ReactNode
  className?:string;

  maxWidth?: string;
  maxHeight?: string;
}

const TableContent:FC<TableContentProps> = (props) => {
  const {
    children, 
    className,
    maxWidth = '640px',
    maxHeight = '480px'
  } = props;

  return (
    <div className={classNames('Table__Content', {}, [className])} style={{maxHeight, maxWidth}}>
      <table >
        {children}
      </table>  
    </div>
  )
};

export default TableContent;