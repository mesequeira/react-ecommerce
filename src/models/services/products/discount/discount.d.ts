import { coerce, string, number, boolean, TypeOf, object } from "zod";

export const discountSchema = object({
  name: string(),
  description: string(),
  discountPercent: coerce.number(),
  active: boolean().optional(),
});

export type Discount = TypeOf<typeof discountSchema>;
