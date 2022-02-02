interface ColumnInterface {
  title: string;
  dataIndex: string;
  key: string;
}

export interface TableProps {
  columns: Array<ColumnInterface>;
  dataSource: Array<any>;
  footer?: boolean;
}
