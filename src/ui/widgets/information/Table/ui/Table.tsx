import React, {FC, memo, useMemo} from "react";
import { TableBodyRow, TableProps } from "../types/TableProps";
import { classNames } from "lib/classNames/classNames";
import { VStack } from "ui/components/shared/Stack";
import { Text } from "ui/components/shared/Text";
import { TableCaption } from "../components/TableCaption";
import { TableContent } from "../components/TableContent";
import { TableHead } from "../components/TableHead";
import { TableRow } from "../components/TableRow";
import { TableData } from "../components/TableData";
import { TableBody } from "../components/TableBody";
import cls from './Table.module.scss'

export const Table:FC<TableProps> = memo((props) => {
  
  const { 
    className,
    caption,
    heads,
    body,
    maxHeightContent  = '480px',
    maxWidthContent = '640px'
  } = props;

  const headColumns = useMemo(() => {
    return (
      heads?.map(column => (
        <TableData 
          key={column.columnId}
          style={{width: column.width}}
        >
          <Text font='l' >{column.columnName}</Text>
        </TableData>
      ))
    )
  }, [heads]);

  const bodyRows = useMemo(() => {
    return (
      body.map((row, index) => (
        <TableRow key={index}>
          { row.map(cell => (
            <TableData  
              key={cell.columnId}
              style={{width: (heads?.find(head => head.columnId === cell.columnId)?.width)}}
            >
              {cell.content}
            </TableData>
          ))}
        </TableRow>
      ))
    )
  }, [body]);

  return (
    <VStack align="center" className={classNames(cls.Table, {}, [className])}>
          <TableCaption>{caption}</TableCaption>
          <TableContent maxWidth={maxWidthContent} maxHeight={maxHeightContent}>
            <TableHead>
              <TableRow>
                {headColumns}
              </TableRow>
            </TableHead>
            <TableBody>
              {bodyRows}
            </TableBody>
          </TableContent>
    </VStack>
  )
});