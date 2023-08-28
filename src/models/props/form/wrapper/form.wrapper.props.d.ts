import { ZodSchema } from "zod";
import { Response } from "../../../common/response/response";

export type FormWrapperProps = {
  children: JSX.Element;
  schema: ZodSchema<any>;
  onSubmit: (data: any) => Promise<Response<any>>;
};
