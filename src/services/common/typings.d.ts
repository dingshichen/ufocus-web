declare namespace API {

  class Base {
    id: number
  }

  class Result<T> {
    code: number;
    message: string;
    data?: T
  }

}
