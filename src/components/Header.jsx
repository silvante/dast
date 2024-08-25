import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full p-5 flex justify-between gap-3">
      <button className="border border-based rounded-xl py-1 px-2 text-2xl bg-white">
        <i className="bx bx-menu"></i>
      </button>
      <input type="text" className="flex-1 border rounded-xl border-based px-5 bg-white outline-none" placeholder="Search Something..."/>
      <button className="base_bg text-white rounded-xl px-3 flex items-center">
        <i className="bx bx-plus text-2xl"></i> NEW
      </button>
      <Link>
        <img src="" alt="" />
      </Link>
    </header>
  );
};

export default Header;
