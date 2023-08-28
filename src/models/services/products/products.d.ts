import {
  string,
  object,
  TypeOf,
  boolean,
  number,
  nullable,
  date,
  coerce,
  nonempty,
} from "zod";
import { discountSchema, inventorySchema, categorySchema } from ".";

export const productSchema = object({
  productId: number().optional(),
  name: string()
    .nonempty("Name cannot be empty.")
    .min(5, "Name need be longer than 5 characters.")
    .max(500, "Name cannot be longer than 500 characters."),
  description: string()
    .nonempty("Description cannot be empty.")
    .min(5, "Description need be longer than 25 characters.")
    .max(4000, "Description cannot be longer than 4000 characters."),
  sku: string().nonempty("SKU cannot be empty."),
  status: boolean().optional(),
  price: coerce.number().min(0.01, "Price must be greater than 0.01."),
  discountId: number().nullable().optional(),
  discount: discountSchema.nullable().optional(),
  inventoryId: number().optional(),
  inventory: inventorySchema,
  categoryId: number().nullable().optional(),
  created: string()
    .transform((val) => new Date(val).toLocaleString())
    .optional(),
  modified: string()
    .transform((val) => new Date(val).toLocaleString())
    .nullable()
    .optional(),
  category: categorySchema.nullable().optional(),
});

export type Product = TypeOf<typeof productSchema>;

export const productsResponseSchema = object({
  products: productSchema.array(),
});

export type ProductsResponse = TypeOf<typeof productsResponseSchema>;

export const productResponseSchema = object({
  product: productSchema,
});

export type ProductResponse = TypeOf<typeof productResponseSchema>;
