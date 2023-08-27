import { Navigate, Outlet } from "react-router-dom";
import { PUBLIC_ROUTES } from "../consts/routes/routes.consts";

const AuthGuard: React.FC = () => {
    if (false) return <p>Loading...</p>;

    return true ? <Outlet /> : <Navigate replace to={PUBLIC_ROUTES.LOGIN} />;
};

export default AuthGuard;
