declare namespace API {

  class Base {
    id: number
  }

  class R<T> {
    code: number;
    message: string;
    data?: T
  }

}
