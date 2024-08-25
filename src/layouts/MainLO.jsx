import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLO = () => {
  return (
    <div>
      <Header />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default MainLO;
