import React, {FC} from "react";
import { TableProps } from "../types/TableProps";
import './Table.scss'
import { classNames } from "lib/classNames/classNames";
import { VStack } from "ui/components/shared/Stack";

const Table:FC<TableProps> = ({ children, className='' }) => {
    
    return (
    <VStack align="center" className={classNames('Table', {}, [className])}>
        {children}
    </VStack>
  )
};

export default Table;