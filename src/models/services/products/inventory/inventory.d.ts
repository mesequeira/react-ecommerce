import { object, TypeOf, number } from "zod";

export const inventorySchema = object({
  quantity: number(),
});

export type Inventory = TypeOf<typeof inventorySchema>;
