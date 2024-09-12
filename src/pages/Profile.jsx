import React from "react";
import banner from "../assets/amerika.png";
import pfp from "../assets/amerika.jpg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="w-full px-5">
      <div className="flex relative items-end justify-center">
        <div className="w-full rounded-xl overflow-hidden h-52">
          <img src={banner} alt="user baenner" className="w-full" />
        </div>
        <div className="z-50 absolute overflow-hidden rounded-full w-24 border-4 border-white translate-y-1/2">
          <img src={pfp} alt="avatar user" />
        </div>
        <div className="absolute bg-white rounded-lg px-5 py-2 top-4 right-4">
          <p className="font-bold">Verified</p>
        </div>
      </div>
      <div className="flex flex-col relative items-center justify-center pt-14">
        <h2 className="font-bold text-2xl">Funny valentine</h2>
        <p>just ordinary artist</p>
        <h1 className="font-bold text-2xl py-2">5 posts | 78k likes | 1.8k followers</h1>
      </div>
      <nav className="w-full border-b-2 border-gray-400 flex">
        <Link className="px-3 py-2 flex">Posts</Link>
        <Link className="px-3 py-2 flex">Multitudes</Link>
      </nav>
    </div>
  );
};

export default Profile;
