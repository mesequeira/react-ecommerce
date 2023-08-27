export interface Response<T> {
  content: T;
  statusCode: number;
  message: string;
}
