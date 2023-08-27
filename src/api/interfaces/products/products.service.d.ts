import { Product } from "../../../models/services/products";

export interface IProductsService {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product>;
  createProduct(product: Product): Promise<boolean>;
  updateProduct(id: number, product: Product): Promise<boolean>;
  deleteProduct(id: number): Promise<boolean>;
}
