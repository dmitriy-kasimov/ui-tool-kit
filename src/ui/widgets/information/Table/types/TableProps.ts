import { ReactElement } from "react";

type TableHeadCell = {
   columnId: string;
   columnName: string;
   width: number;
}
type TableHeadRow = TableHeadCell[];

export type TableBodyCell = {
   columnId: string;
   content?: ReactElement;
}
export type TableBodyRow = TableBodyCell[];

export interface TableProps{
   className?: string;

   caption?: ReactElement;
   heads?: TableHeadRow;
   body: TableBodyRow[];
}