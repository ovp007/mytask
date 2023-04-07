import React, { ReactNode, useState } from "react";
import { AppConstants } from "../constants/app-constants";

// export interface UseSearchPaginatorParams {
//   readonly defaultPageSize?: number;
//   readonly defaultPage?: number;
// }

// export interface UseSearchPaginatorResult {
//   readonly page: number;
//   readonly pageSize: number;
//   readonly showTotal: (total: number, range: [number, number]) => ReactNode;
//   readonly handlePaginate: (page: number, pageSize: number) => void;
// }

const usePaginator = () => {
  const [{ pageSize, page, pageSizeOptions }, setPaginationData] = useState({
    pageSize: AppConstants.TABLE_LAYOUT.DEFAULT_PAGE_SIZE,
    page: AppConstants.TABLE_LAYOUT.DEFAULT_FIRST_PAGE,
    pageSizeOptions: [5, 10, 20, 50, 100],
  });

  const handlePaginate = (page: number, pageSize: number): void => {
    setPaginationData({ pageSize, page, pageSizeOptions });
  };

  const showTotal = (
    total: number,
    [from, to]: [number, number]
  ): ReactNode => {
    return (
      <>
        {from} - {to} /{total}
      </>
    );
  };
  return { page, pageSize, pageSizeOptions, showTotal, handlePaginate };
};

export default usePaginator;
