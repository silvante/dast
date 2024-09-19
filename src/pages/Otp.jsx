import React from "react";
import RegisterSide from "../components/RegisterSide";
import axios from "axios";

const Otp = () => {
  const [Loading, setLoading] = useState(false);

  
  return (
    <div className="w-full h-screen">
      <div className="flex">
        <div className="w-[50%] flex items-center justify-center">
          <div>
            <form className="w-60 space-y-3 flex flex-col text-center">
              <h3 className="text-lg font-semibold">Verify gmail</h3>
              <input
                type="number"
                required
                className="w-full bg-white border-2 font-semibold border-slate-950 py-3 px-5 rounded-xl placeholder:font-normal placeholder:text-slate-950"
                placeholder="****"
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
    </div>
  );
};

export default Otp;
