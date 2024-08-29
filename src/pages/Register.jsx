import React from "react";
import logo_dark from "../assets/dast_dark.png";
import { Link } from "react-router-dom";
import SingUp from "../components/registers/SingUp";
import EmailSend from "../components/registers/EmailSend";
import PicAndBio from "../components/registers/PicAndBio";

const Register = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" space-y-4 flex flex-col items-center">
        <Link to={"/"}>
          <img src={logo_dark} alt="logo" width={"100px"} />
        </Link>
        <div>
          {/* <SingUp /> */}
          {/* <EmailSend/> */}
          <PicAndBio/>
        </div>
      </div>
    </div>
  );
};

export default Register;
