import { useContext, useState } from "react";
import { AuthContext } from "../App";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children, isLoading, setIsLoading }) => {
  const { loggedIn } = useContext(AuthContext);
  if (isLoading) return <div></div>;
  else {
    if (loggedIn) {
      return <>{children}</>;
    } else {
      return <Navigate to={"/login"} replace={true} />;
    }
  }
};

export default AuthRoute;
