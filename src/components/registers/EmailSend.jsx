import React from "react";

const EmailSend = () => {
  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold text-center">verify email</p>
      <form className="space-y-1 w-72 flex flex-col">
        <p>
          we sent a code to your email{" "}
          <span className="font-semibold">email@gmail.com</span> enter that here
        </p>
        <div className="flex w-full flex-col">
          <input
            className="outline-none py-2 px-3 rounded-xl border-2 border-based space-y-1 mb-3 hover:border-b_purple transition-all focus:border-v_purple my-4"
            type="text"
            placeholder="****"
          />
        </div>
        <button className="py-2 base_bg text-white rounded-xl">VERIFY</button>
      </form>
    </div>
  );
};

export default EmailSend;
