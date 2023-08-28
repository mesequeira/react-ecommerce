import React from "react";
import { productsService } from "../../api/services/products/ProductsService";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../../models/services/products";
import { QUERY_KEY } from "../../consts/queries/queries.key";
import ProductsTable from "./components/table";
import { useNavigationStore } from "../../store/navigation/navigation.store";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";
import { PRODUCTS_ROUTES } from "../../consts/routes/routes.consts";

const Products: React.FC = () => {
    const title = useNavigationStore((state) => state.title);
    const navigate = useNavigate();

    const { data, isLoading } = useQuery<Product[]>({
        queryKey: [QUERY_KEY.PRODUCTS],
        queryFn: productsService.getProducts,
    });

    return (
        <React.Fragment>
            <Box
                component="div"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                className="card-container"
                padding={2}
                alignItems="center"
            >
                <Typography variant="body1">{`${title} Products`}</Typography>
                <Button
                    size="medium"
                    color="primary"
                    variant="contained"
                    onClick={() => navigate(PRODUCTS_ROUTES.PRODUCT_NEW)}
                >
                    CREATE NEW
                </Button>
            </Box>
            <ProductsTable loading={isLoading} products={data ?? []} />
        </React.Fragment>
    );
};

export default Products;
