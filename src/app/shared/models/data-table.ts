export interface DataTable {
  tableTitle?: string;
  isDisplaytitle?: boolean;
  isRefresh?: boolean;
  isDownload?: boolean;
  isSearchFilter?: boolean;
  tableStyle?: string;
  isSelectable?: boolean;
  isMultiSelect?: boolean;
  isActionable?: boolean;
  isEditable?: boolean;
  isViewDetails?: boolean;
  sourceUrl?: string;
  searchParams?: any;
  isUpdateRow?: boolean;
  isDeleteRow?: boolean;
  isCreateRow?: boolean;
  columnModel?: ColumnModel[];
  actions?: any;
  isDeletable?: boolean;
  isCustom: boolean;
  customIcon: string;
  customLabel: string;
  customDependsOn: string;
  excelName?: string,
  isPagination?: boolean
}

export interface ColumnModel {
  label: string;
  columnDef: string;
  isEditable?: boolean;
  isEditableType?: string;
  isTableDisplay?: boolean;
}
