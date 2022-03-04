import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSelect, logout } from "../Auth/authSlice";

const AppPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedUser } = useSelector(authSelect);

  console.log(loggedUser);

  const onLogoutClick = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div>
        <h1 className="text-5xl">Welcome</h1>
        <p>
          You have successfully logged in{" "}
          {`${loggedUser.firstName} ${
            loggedUser.middleName.length > 0
              ? loggedUser.middleName.charAt(0) + "."
              : ""
          } ${loggedUser.lastName}`}
        </p>
        <button onClick={onLogoutClick}>Log Out</button>
      </div>
    </div>
  );
};

export default AppPage;
