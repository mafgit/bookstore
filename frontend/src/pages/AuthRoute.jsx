import { useContext } from "react";
import { AuthContext } from "../App";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const { loggedIn } = useContext(AuthContext);
  if (!loggedIn) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return <>{children}</>;
};

export default AuthRoute;
