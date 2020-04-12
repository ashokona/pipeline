import { DataTable } from './data-table';

export interface LookUp {
  placeHolder?: string;
  valuesToDisplay?: any[];
  sourceUrl: string;
  tableOptions?: DataTable;
}
