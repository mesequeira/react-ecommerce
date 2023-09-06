import React, { Suspense } from "react";
import Navigation from "./navigation/Navigation";
import Content from "../content/Content";
import { Route, Routes } from "react-router-dom";
import ProductsRouter from "../../../pages/products/router/ProductsRouter";
import {
    ORDERS_ROUTES,
    PRODUCTS_ROUTES,
} from "../../../consts/routes/routes.consts";
import Loading from "../loading/Loading";
import Box from "@mui/material/Box/Box";

const Layout: React.FC = () => {
    return (
        <React.Fragment>
            <Navigation />
            <Box minHeight={"100vh"} display={"flex"} flexDirection={"column"}>
                <Content>
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path={PRODUCTS_ROUTES.ROOT} element={<ProductsRouter />} />
                            <Route path={ORDERS_ROUTES.ROOT} element={<ProductsRouter />} />
                        </Routes>
                    </Suspense>
                </Content>
            </Box>
        </React.Fragment>
    );
};

export default Layout;
