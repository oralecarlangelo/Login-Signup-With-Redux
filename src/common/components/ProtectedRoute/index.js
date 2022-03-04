import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route } from "react-router-dom";
import { authSelect } from "../../../features/Auth/authSlice";

const ProtectedRoute = () => {
  const { isAuth } = useSelector(authSelect);

  // return isAuth ? <Outlet /> : <Navigate to={"/auth/login"} />;
  return <Outlet />;
};

export default ProtectedRoute;
