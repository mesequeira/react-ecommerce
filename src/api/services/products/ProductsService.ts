import instance from "../../../interceptors/axios.interceptor";
import {
  type Product,
  type ProductsResponse,
  type ProductResponse,
  productSchema,
} from "../../../models/services/products";
import { IProductsService } from "../../interfaces/products/products.service";
import { type Response } from "../../../models/common/response/response";

class ProductsService implements IProductsService {
  /**
   * Get all products
   * @returns {Promise<Product[]>}
   */
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

  /**
   * Get a product by id
   * @param id The product id
   * @returns {Promise<Product>}
   */
  async getProduct(id: string | undefined): Promise<Product> {
    if (!id) throw new Error("Id not specified.");

    const response = await instance.get<Response<ProductResponse>>(
      `products?ProductId=${id}`
    );
    const {
      data: {
        content: { product },
      },
    } = response;
    return await productSchema.parseAsync(product);
  }

  /**
   * Create a new product
   * @param data The product data
   * @returns {Promise<Response<boolean>>}
   */
  async createProduct(data: Product): Promise<Response<boolean>> {
    const response = await instance.post<Response<boolean>>("products", {
      product: data,
    });
    return response.data;
  }

  async updateProduct(
    id: string | undefined,
    product: Product
  ): Promise<Response<boolean>> {
    if (!id) throw new Error("Id not specified.");

    const response = await instance.put<Response<boolean>>("products", {
      productId: parseInt(id),
      product,
    });

    return response.data;
  }

  deleteProduct(id: number): Promise<Response<boolean>> {
    throw new Error("Method not implemented.");
  }
}

export const productsService = new ProductsService();
