import React from 'react';
import { useNavigationStore } from '../../store/navigation/navigation.store';
import { useNavigate } from 'react-router-dom';

const Orders: React.FC = () => {
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

export default Orders;
