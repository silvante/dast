import React from "react";

const PicAndBio = () => {
  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold text-center">enter avatar</p>
      <div className="flex flex-col items-center">
        <label
          htmlFor="filer"
          className="w-40 h-40 flex bg-slate-200 rounded-full items-center justify-center border-based border-2"
        >
          <i className="bx bx-user-circle text-5xl text-slate-600"></i>
        </label>
        <input type="file" accept="image/*" id="filer" className="hidden" />
        <input
          type="text"
          className="outline-none py-2 px-3 rounded-xl border-2 border-based space-y-1 mb-3 hover:border-b_purple transition-all focus:border-v_purple my-4"
          placeholder="some bio here"
          maxLength={35}
        />
        <div className="space-y-2 w-full flex items-center flex-col">
          <button className="base_bg text-white py-2 px-3 rounded-xl w-full">
            Submit
          </button>
          <p>-or-</p>
          <button className="text-purple-800">Skip</button>
        </div>
      </div>
    </div>
  );
};

export default PicAndBio;
