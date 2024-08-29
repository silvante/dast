import React from "react";

const SingUp = () => {
  return (
    <div>
      <p className="text-lg font-semibold text-center">Registrate</p>

      <form className="space-y-1 w-72 flex flex-col">
        <div className="flex w-full flex-col">
          <label>name</label>
          <input
            className="outline-none py-2 px-3 rounded-xl border-2 border-based space-y-1 hover:border-b_purple transition-all focus:border-v_purple"
            type="text"
            required
          />
        </div>
        <div className="flex w-full flex-col">
          <label>username</label>
          <input
            className="outline-none py-2 px-3 rounded-xl border-2 border-based space-y-1 hover:border-b_purple transition-all focus:border-v_purple"
            type="text"
            required
          />
        </div>
        <div className="flex w-full flex-col">
          <label>email</label>
          <input
            className="outline-none py-2 px-3 rounded-xl border-2 border-based space-y-1 hover:border-b_purple transition-all focus:border-v_purple"
            type="text"
            required
          />
        </div>
        <div className="flex w-full flex-col">
          <label>password</label>
          <input
            className="outline-none py-2 px-3 rounded-xl border-2 border-based space-y-1 mb-3 hover:border-b_purple transition-all focus:border-v_purple"
            type="text"
            required
          />
        </div>
        <button className="py-2 base_bg text-white rounded-xl">CREATE</button>
      </form>
    </div>
  );
};

export default SingUp;
