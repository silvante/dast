import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Aside from "../components/Aside";

const MainLO = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="w-full flex">
      {path !== "/login" && path !== "/register" && path !== "/otp" && (
        <Aside />
      )}
      <main className="flex-1">
        {path !== "/login" && path !== "/register" && path !== "/otp" && (
          <Header />
        )}
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default MainLO;
