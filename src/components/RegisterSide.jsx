import React from "react";
import { Link, useLocation } from "react-router-dom";
import mario from "../../public/mario.jpg";
import art from "../../public/art.jpg";
import gmail from "../../public/gmail.jpg";

const RegisterSide = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="w-[50%] bg-slate-950 h-screen text-white flex justify-center items-center">
      <div>
        {path === "/register" && (
          <div className="text-center flex flex-col">
            <h2 className="text-3xl font-semibold">Welcome to Dast!</h2>
            <p>enjoy your day with art!</p>
            <img
              src={art}
              alt="mario"
              className="w-72 rounded-2xl my-5 aspect-square object-cover"
            />
            are you alredy have an account?
            <Link to={"/login"} className="underline ml-1">
              Log in
            </Link>
          </div>
        )}
        {path === "/login" && (
          <div className="text-center flex flex-col">
            <h2 className="text-3xl font-semibold">Welcome back!</h2>
            <p>have great time!</p>
            <img
              src={mario}
              alt="mario"
              className="w-72 rounded-2xl my-5 aspect-square object-cover"
            />
            wanna create new account?
            <Link to={"/register"} className="underline ml-1">
              registrate
            </Link>
          </div>
        )}
        {path === "/otp" && (
          <div className="text-center flex flex-col">
            <h2 className="text-3xl font-semibold">verify your gmail!</h2>
            <p>enter otp pin!</p>
            <img
              src={gmail}
              alt="mario"
              className="w-72 rounded-2xl my-5 aspect-square object-cover"
            />
            we send one time password to gmail
            <Link to={"/register"} className="underline ml-1">
              khhamidov.ko@gmail.com
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterSide;
