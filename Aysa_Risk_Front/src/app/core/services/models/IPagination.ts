export enum SORT_DIRECTION {
  ASC = 0,
  DESC = 1
}

export interface IFilterPagination {
  property: string;
  value: string;
}

export interface IQueryParamPagination {
  pageSize?: number;
  page?: number;
  sort?: number;
  sortDirection?: SORT_DIRECTION;
  filter?: IFilterPagination;
}

export interface IPagination<T> extends IQueryParamPagination {
  pageQuantity: number;
  total: number;
  skipPage: number;
  data: Array<T>;
}
