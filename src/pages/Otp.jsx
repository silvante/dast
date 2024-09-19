import React, { useState } from "react";
import RegisterSide from "../components/RegisterSide";
import axios from "axios";
import { Navigate, useLocation } from "react-router-dom";
import White from "../components/White";

const Otp = () => {
  const location = useLocation();
  const [Loading, setLoading] = useState(false);
  const userid = location.state?.userid;

  const [redirect, setRedirect] = useState(null);
  const [otp, setotp] = useState("");

  console.log(userid);

  async function Otp(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/api/users/verifyOTP", {
        userid,
        otp,
      });
      setLoading(false);
      setRedirect({ to: "/login" });
      alert(data.message);
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
          <div>
            <form
              className="w-60 space-y-3 flex flex-col text-center"
              onSubmit={Otp}
            >
              <h3 className="text-lg font-semibold">Verify gmail</h3>
              <input
                type="text"
                required
                className="w-full bg-white border-2 font-semibold border-slate-950 py-3 px-5 rounded-xl placeholder:font-normal placeholder:text-slate-950"
                placeholder="****"
                value={otp}
                onChange={(e) => setotp(e.target.value.trim())}
              />
              <p>_and_</p>
              <button className="w-full bg-slate-950 text-white py-3 px-5 rounded-xl">
                Submit
              </button>
            </form>
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
