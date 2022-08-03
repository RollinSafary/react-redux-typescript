// here we'll define types of data we receive from the server
export interface IServerResponse<T> {
  data: T;
  error: IErrorMessage;
}

export interface IErrorMessage {
  code: number;
  message: string;
}
