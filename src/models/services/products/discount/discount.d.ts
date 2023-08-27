import { string, number, boolean, TypeOf, object } from "zod";

export const discountSchema = object({
  name: string(),
  description: string(),
  discountPercent: number(),
  active: boolean(),
});

export type Discount = TypeOf<typeof discountSchema>;
