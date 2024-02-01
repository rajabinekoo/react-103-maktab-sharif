export interface IGetListRes<T> {
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
  data: T[];
}
