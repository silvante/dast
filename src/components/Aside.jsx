import React from "react";
import logo_light from "../assets/dast_light.png";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="w-64 border-based border-r h-screen">
      <div className="base_bg w-full p-5 flex justify-between items-center">
        <Link to={"/"}>
          <img src={logo_light} alt="logo" width={"80px"} />
        </Link>
        <button className="text-white text-xl">
          <i class="bx bx-dots-vertical-rounded"></i>
        </button>
      </div>
    </aside>
  );
};

export default Aside;
