import React, { Suspense } from "react";
import Sidebar from "./sidebar/Sidebar";
import Box from "@mui/material/Box/Box";
import Content from "../content/Content";
import { Route, Routes } from "react-router-dom";
import ProductsRouter from "../../../pages/products/router/ProductsRouter";
import { PRODUCTS_ROUTES } from "../../../consts/routes/routes.consts";
import Loading from "../loading/Loading";

const Layout: React.FC = () => {
    return (
        <Box component="div" display="flex">
            <Sidebar />
            <Content>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path={PRODUCTS_ROUTES.ROOT} element={<ProductsRouter />} />
                    </Routes>
                </Suspense>
            </Content>
        </Box>
    );
};

export default Layout;
