declare namespace API {

  class Base {
    id: number
  }

  class R<T> {
    code: number;
    message: string;
    data?: T
  }

  class PageInfo<T> {
    total: number;
    size: number;
    current: number;
    records: T[];
  }

  class PageParam<T> {
    page: number = 1;
    size: number = 10;
    query: T;
  }
}
