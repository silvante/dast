import React, { useState } from "react";
import { Link } from "react-router-dom";
import pfp from "../assets/amerika.jpg";

const Header = () => {
  const [acc, setacc] = useState(false);
  return (
    <header className="w-full p-5 flex justify-between gap-3">
      <button className="border border-based rounded-xl py-1 px-2 text-2xl bg-white">
        <i className="bx bx-menu"></i>
      </button>
      <input
        type="text"
        className="flex-1 border rounded-xl border-based px-5 bg-white outline-none"
        placeholder="Search Something..."
      />
      {acc && (
        <button className=" bg-gray-950 text-white rounded-xl px-3 flex items-center">
          <i className="bx bx-plus text-2xl"></i> NEW
        </button>
      )}
      {acc ? (
        <Link className=" w-11 h-11 rounded-full overflow-hidden border-2 border-gray-950 ">
          <img
            src={pfp}
            alt="profile picture"
            className=" aspect-square object-cover"
          />
        </Link>
      ) : (
        <Link
          to={"/register"}
          className="bg-gray-950 px-4 flex items-center justify-center text-white rounded-xl"
        >
          Registrate
        </Link>
      )}
    </header>
  );
};

export default Header;
