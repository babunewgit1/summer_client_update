import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { currentuser, loading } = useContext(AuthContext);
  const location = useLocation();

  if (currentuser) {
    return children;
  }

  if (loading) {
    return <h2>Loading</h2>;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
