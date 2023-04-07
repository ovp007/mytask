export interface PaginatorData {
  page: number;
  pageSize: number;
  total: number;
  pageSizeOptions: string[] | number[];
  showSizeChanger: boolean;
}
