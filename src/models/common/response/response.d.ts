import { Error } from "../errors/error";
export interface Response<T> {
  content: T;
  statusCode: number;
  message: string;
  errors: Error[];
}
