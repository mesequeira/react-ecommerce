import instance from "../../../interceptors/axios.interceptor";
import { type Response } from "../../../models/common/response/response";
import {
  type CategoriesResponse,
  type Category,
  categorySchema,
} from "../../../models/services/products";
import { type ICategoriesService } from "../../interfaces/categories/categories.service";

class CategoriesService implements ICategoriesService {
  async getCategories(): Promise<Category[]> {
    const response = await instance.get<Response<CategoriesResponse>>(
      "categories/all"
    );
    const {
      data: {
        content: { categories },
      },
    } = response;
    return (await categorySchema.array().parseAsync(categories)) ?? [];
  }
}

export const categoriesService = new CategoriesService();
