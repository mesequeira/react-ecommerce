import { Navigate, Outlet } from "react-router-dom";
import { PUBLIC_ROUTES } from "../consts/routes/routes.consts";
import useAuthorization from "../common/hooks/useAuthorization";
import Loading from "../common/components/loading/Loading";

const AuthGuard: React.FC = () => {
    const { isAuthorized, isLoading } = useAuthorization();

    if (isLoading) return <Loading />;

    return isAuthorized ? (
        <Outlet />
    ) : (
        <Navigate replace to={PUBLIC_ROUTES.LOGIN} />
    );
};

export default AuthGuard;
