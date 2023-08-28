import { coerce, object, TypeOf, number } from "zod";

export const inventorySchema = object({
  quantity: coerce.number().min(0, "Quantity must be greater than 0."),
});

export type Inventory = TypeOf<typeof inventorySchema>;
