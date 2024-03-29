import React from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "./consts/routes/routes.consts";
import AuthGuard from "./guards/AuthGuard";
import Loading from "./common/components/loading/Loading";
import Login from "./pages/login";
const ServerError = React.lazy(() => import("./pages/error"));
const Layout = React.lazy(() => import("./common/components/layout"));

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={`${PUBLIC_ROUTES.ERROR}`} element={<ServerError />} />
          <Route path={`${PUBLIC_ROUTES.LOGIN}`} element={<Login />} />

          <Route element={<AuthGuard />}>
            <Route path={PRIVATE_ROUTES.LAYOUT} element={<Layout />} />
          </Route>
        </Routes>
      </Suspense>
    </React.Fragment>
  );
};

export default App;
