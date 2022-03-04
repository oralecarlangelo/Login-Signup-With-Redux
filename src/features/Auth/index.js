import React from "react";
import { Outlet } from "react-router-dom";
import CodeBg from "../../assets/codebg.jpg";

const Auth = () => {
  return (
    <div className="flex w-full h-screen bg-slate-100-50">
      <div className="flex items-center justify-center flex-1 h-full">
        <Outlet />
      </div>
      <div
        className="h-full bg-green-500 w-[40%] bg-no-repeat bg-cover bg-right"
        style={{ backgroundImage: `url(${CodeBg})` }}
      />
    </div>
  );
};

export default Auth;
