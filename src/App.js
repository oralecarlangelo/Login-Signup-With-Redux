import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./common/components/ProtectedRoute";
import AppPage from "./features/AppPage";
import Auth from "./features/Auth";
import { authSelect } from "./features/Auth/authSlice";
import Login from "./features/Auth/components/Login";
import Register from "./features/Auth/components/Register";

function App() {
  const { isAuth } = useSelector(authSelect);
  return (
    <Routes>
      <Route path="/auth" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<AppPage />} />
      </Route>
      <Route
        path="*"
        element={isAuth ? <Navigate to={"/"} /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
0;
