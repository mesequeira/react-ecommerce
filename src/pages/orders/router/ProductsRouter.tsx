import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PRODUCTS_ROUTES } from "../../../consts/routes/routes.consts";
import FormProduct from "../components/form/FormProduct";
import Loading from "../../../common/components/loading/Loading";
const Products = React.lazy(() => import("../index"));

const ProductsRouter: React.FC = () => {

    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path={PRODUCTS_ROUTES.PRODUCTS_ALL} element={<Products />} />
                <Route path={PRODUCTS_ROUTES.PRODUCT_NEW} element={<FormProduct />} />
                <Route path={PRODUCTS_ROUTES.PRODUCT_EDIT} element={<FormProduct />} />
            </Routes>
        </Suspense>
    );
};

export default ProductsRouter;
