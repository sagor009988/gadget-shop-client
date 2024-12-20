import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../pages/Loading";
import useAuth from "../../hooks/useAuth";



// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children;
    }

    return <Navigate to="/" state={{ form: location }} replace></Navigate>

};

export default PrivateRoute;