// custom type base response

export interface IBaseResponse<T> {
  message?: string;
  succeeded: boolean;
  data: T;
  labels?: Array<string>;
}

export interface IListBaseResponse<T> extends IBaseResponse<Array<T>> {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface IBackendErrorResponse {
  messages?: Array<string>;
  succeeded: boolean;
}