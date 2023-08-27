import instance from "../../../interceptors/axios.interceptor";
import {
  type Product,
  type ProductsResponse,
  productSchema,
} from "../../../models/services/products";
import { IProductsService } from "../../interfaces/products/products.service";
import { type Response } from "../../../models/common/response/response";

class ProductsService implements IProductsService {
  async getProducts(): Promise<Product[]> {
    const response = await instance.get<Response<ProductsResponse>>(
      "products/all"
    );
    const {
      data: {
        content: { products },
      },
    } = response;
    return (await productSchema.array().parseAsync(products)) ?? [];
  }
  getProduct(id: number): Promise<Product> {
    throw new Error("Method not implemented.");
  }
  createProduct(product: Product): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  updateProduct(id: number, product: Product): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  deleteProduct(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

export const productsService = new ProductsService();
