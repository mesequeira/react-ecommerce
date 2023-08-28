import { object, TypeOf, string, number } from "zod";

export const categorySchema = object({
  id: number().optional(),
  type: string().optional(),
});

export type Category = TypeOf<typeof categorySchema>;

export const categoriesResponseSchema = object({
  categories: categorySchema.array(),
});

export type CategoriesResponse = TypeOf<typeof categoriesResponseSchema>;
