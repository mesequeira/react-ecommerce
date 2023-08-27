import { object, TypeOf, string } from "zod";

export const categorySchema = object({
  type: string(),
});

export type Category = TypeOf<typeof categorySchema>;
