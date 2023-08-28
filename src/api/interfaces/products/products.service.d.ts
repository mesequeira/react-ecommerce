import { Product } from "../../../models/services/products";

export interface IProductsService {
  getProducts(): Promise<Product[]>;
  getProduct(id: string | undefined): Promise<Product>;
  createProduct(product: Product): Promise<Response<boolean>>;
  updateProduct(
    id: string | undefined,
    product: Product
  ): Promise<Response<boolean>>;
  deleteProduct(id: number): Promise<Response<boolean>>;
}
