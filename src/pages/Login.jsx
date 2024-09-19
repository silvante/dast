import React, { useState } from "react";
import RegisterSide from "../components/RegisterSide";
import axios from "axios";
import White from "../components/White";

const Login = () => {
  const [Loading, setLoading] = useState(false);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function Login(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      setLoading(false);
      console.log(data);
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
            <button className="bg-slate-950 text-white shadow-lg py-3 w-60 px-5 rounded-lg flex items-center justify-center mb-3">
              Login with google <i className="bx bxl-google text-xl ml-1"></i>
            </button>
            <form
              className="w-60 space-y-3 flex flex-col text-center"
              onSubmit={Login}
            >
              <h3 className="text-lg font-semibold">Login</h3>
              <input
                type="email"
                required
                className="w-full bg-white border-2 border-slate-950 py-3 px-5 rounded-xl placeholder:text-slate-950"
                placeholder="gmail"
                value={email}
                onChange={(e) => setemail(e.target.value.trim())}
              />
              <input
                type="password"
                required
                className="w-full bg-white border-2 border-slate-950 py-3 px-5 rounded-xl placeholder:text-slate-950"
                placeholder="password"
                value={email}
                onChange={(e) => setemail(e.target.value.trim())}
              />
              <p>_and_</p>
              <button className="w-full bg-slate-950 text-white py-3 px-5 rounded-xl">
                Log in
              </button>
            </form>
          </div>
        </div>
        <RegisterSide />
      </div>
      {Loading && <White />}
    </div>
  );
};

export default Login;
