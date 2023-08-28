import { LoadingProps } from "../common.props";
import { type Product } from "../../services/products";

export interface FormProductProps extends LoadingProps {
  product: Product | undefined;
}
