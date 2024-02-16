interface IInternalApiResponse<T> {
  error?: string;
  data?: T;
}

interface IHasChild {
  children: React.ReactNode | React.JSX.Element;
}

interface PocketbaseResponse<T> {
  error?: string;
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: T[];
}
