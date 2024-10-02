import React, { useState } from "react";
import RegisterSide from "../components/RegisterSide";
import axios from "axios";
import { Navigate, useLocation } from "react-router-dom";
import White from "../components/White";

const Otp = () => {
  const location = useLocation();
  const [Loading, setLoading] = useState(false);
  const userid = location.state?.userid;
  const user_pass = location.state?.user_pass;
  const user_email = location.state?.user_email;

  const [redirect, setRedirect] = useState(null);
  const [otp, setotp] = useState("");

  if (!userid || !user_email || !user_pass) {
    return <Navigate to={"/register"} />;
  }

  async function Otp(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/api/users/verifyOTP", {
        userid,
        otp,
      });
      setLoading(false);
      Login(user_email, user_pass);
      alert(data.message);
    } catch (error) {
      console.log(error);
      alert("something went wrong");
      setLoading(false);
    }
  }

  async function Login(email, password) {
    try {
      setLoading(true);
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      setToken(data);
      localStorage.setItem("authToken", data);
      setLoading(false);
      setRedirect({ to: "/" });
      console.log(data);
    } catch (error) {
      console.log(error);
      alert("something went wrong");
      setLoading(false);
    }
  }

  async function resendOtp(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("/api/users/resendOTP", {
        email: user_email,
        userid: userid,
      });
      setLoading(false);
      alert("code resend");
    } catch (error) {
      console.log(error);
      alert("something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-screen">
      <div className="flex">
        <div className="w-[50%] flex items-center justify-center">
          <div className="flex flex-col items-center">
            <form
              className="w-60 space-y-3 flex flex-col text-center"
              onSubmit={Otp}
            >
              <h3 className="text-lg font-semibold">Verify gmail</h3>
              <input
                type="text"
                required
                className="w-full bg-white border-2 font-semibold border-gray-950 py-3 px-5 rounded-xl placeholder:font-normal placeholder:text-gray-950"
                placeholder="****"
                value={otp}
                onChange={(e) => setotp(e.target.value.trim())}
              />
              <p>_and_</p>
              <button className="w-full bg-gray-950 text-white py-3 px-5 rounded-xl">
                Submit
              </button>
            </form>
            <button className="my-5" onClick={resendOtp}>
              resend code
            </button>
          </div>
        </div>
        <RegisterSide />
      </div>
      {Loading && <White />}
      {redirect && <Navigate to={redirect.to} state={redirect.state} />}
    </div>
  );
};

export default Otp;
