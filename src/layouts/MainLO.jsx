import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Aside from "../components/Aside";

const MainLO = () => {
  return (
    <div className="w-full flex">
      <Aside />
      <main>
        <Header />
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default MainLO;
