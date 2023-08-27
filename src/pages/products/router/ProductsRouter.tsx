import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PRODUCTS_ROUTES } from "../../../consts/routes/routes.consts";
const Products = React.lazy(() => import("../index"));

const ProductsRouter: React.FC = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route
                    path={`${PRODUCTS_ROUTES.PRODUCTS_ALL}`}
                    element={<Products />}
                />
            </Routes>
        </Suspense>
    );
};

export default ProductsRouter;
