declare namespace API {

  class Base {
    id: string
  }

  class R<T> {
    code: string;
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

  class SelectQuery {
    keyword?: string;
  }
}
