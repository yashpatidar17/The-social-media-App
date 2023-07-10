import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate, useLocation } from "react-router";

export const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate replace to="/" state={{ from: location }} />
  );
};
