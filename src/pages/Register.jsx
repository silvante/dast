import React, { useState } from "react";
import RegisterSide from "../components/RegisterSide";
import White from "../components/White";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [Loading, setLoading] = useState(false);

  const [name, setname] = useState("new user");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");

  const [redirect, setRedirect] = useState(null);

  async function Register(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post("/api/users", {
        name,
        email,
        password,
        username,
      });
      console.log(data);
      setLoading(false);
      setRedirect({
        to: "/otp",
        state: {
          userid: data.data.userid,
          user_email: email,
          user_pass: password,
        },
      });
    } catch (error) {
      console.log(error);
      alert(error);
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-screen">
      <div className="flex">
        <div className="w-[50%] flex items-center justify-center">
          <div>
            <button className="bg-gray-950 text-white shadow-lg py-3 w-60 px-5 rounded-lg flex items-center justify-center mb-3">
              Sing up with google <i className="bx bxl-google text-xl ml-1"></i>
            </button>
            <form
              className="w-60 space-y-3 flex flex-col text-center"
              onSubmit={Register}
            >
              <h3 className="text-lg font-semibold">Registrate</h3>
              <input
                type="text"
                required
                className="w-full bg-white border-2 font-semibold border-gray-950 py-3 px-5 rounded-xl placeholder:font-normal placeholder:text-gray-950"
                placeholder="username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
              <input
                type="email"
                required
                className="w-full bg-white border-2 font-semibold border-gray-950 py-3 px-5 rounded-xl placeholder:font-normal placeholder:text-gray-950"
                placeholder="gmail"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="password"
                required
                className="w-full bg-white border-2 font-semibold border-gray-950 py-3 px-5 rounded-xl placeholder:font-normal placeholder:text-gray-950"
                placeholder="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <p>_and_</p>
              <button className="w-full bg-gray-950 text-white py-3 px-5 rounded-xl">
                Registrate
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

export default Register;
