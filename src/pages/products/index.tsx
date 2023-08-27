import React from "react";
import { productsService } from "../../api/services/products/ProductsService";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../../models/services/products";
import { QUERY_KEY } from "../../consts/queries/queries.key";
import ProductsTable from "./components/table";

const Products: React.FC = () => {
    const { data, isLoading } = useQuery<Product[]>({
        queryKey: [QUERY_KEY.PRODUCTS],
        queryFn: productsService.getProducts,
        retry: 0,
    });

    return (
        <React.Fragment>
            <ProductsTable loading={isLoading} products={data ?? []} />
        </React.Fragment>
    );
};

export default Products;
