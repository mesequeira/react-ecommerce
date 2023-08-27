import { string, object, TypeOf, boolean, number, nullable } from "zod";
import { discountSchema, inventorySchema, categorySchema } from ".";

export const productSchema = object({
  productId: number(),
  name: string(),
  description: string(),
  sku: string(),
  status: boolean(),
  price: number(),
  discountId: number().nullable(),
  discount: discountSchema.nullable(),
  inventoryId: number(),
  inventory: inventorySchema,
  categoryId: number().nullable(),
  category: categorySchema.nullable(),
});

export type Product = TypeOf<typeof productSchema>;

export const productsResponseSchema = object({
  products: productSchema.array(),
});

export type ProductsResponse = TypeOf<typeof productsResponseSchema>;
