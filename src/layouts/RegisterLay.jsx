import React from "react";
import { Outlet } from "react-router-dom";
import RegisterHead from "../components/RegisterHead";

const RegisterLay = () => {
  return (
    <div>
      <RegisterHead />
      <Outlet />
    </div>
  );
};

export default RegisterLay;
