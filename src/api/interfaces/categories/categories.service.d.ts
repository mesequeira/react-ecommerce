import { type Category } from "../../../models/services/products";

export interface ICategoriesService {
  getCategories(): Promise<Category[]>;
}
