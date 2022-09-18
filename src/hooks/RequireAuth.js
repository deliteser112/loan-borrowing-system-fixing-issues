import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = ({ allowedRoles }) => {

    const { auth } = useAuth();
    const location = useLocation();
    return (
        allowedRoles.includes(auth?.userRoles)
            ? <Outlet />
            : auth?.userAuth
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/auth" state={{ from: location }} replace />
    );
}

export default RequireAuth;