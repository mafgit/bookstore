import { useContext } from "react";
import { AuthContext } from "../App";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children, isLoading, setIsLoading }) => {
  const { loggedIn, isAdmin } = useContext(AuthContext);

  if (isLoading) {
    return <div></div>;
  } else {
    if (isAdmin && loggedIn) return <>{children}</>;
    else return <Navigate to={"/"} replace={true} />;
  }
};

export default AdminRoute;
