import { useContext } from "react";
import { AuthContext } from "../App";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { loggedIn, isAdmin } = useContext(AuthContext);

  if (isAdmin && loggedIn) return <>{children}</>;
  else return <Navigate to={"/"} replace={true} />;
};

export default AdminRoute;
