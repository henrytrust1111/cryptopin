"use client";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="w-full h-[70px] flex items-center justify-center">
        <div className="w-4/5 h-[70px] border-b-2 border-b-slate-200 flex items-center justify-between">
          <div className="w-[15%] h-[80%]">
            <img src="./Logo.svg" alt="" />
          </div>
          <div className="w-[50%] h-[80%] flex items-center justify-around">
            <div className="cursor-pointer">Home</div>
            <div className="cursor-pointer">About</div>
            <div className="cursor-pointer">Pages</div>
            <div className="cursor-pointer">Pricing</div>
            <div className="cursor-pointer">Contact</div>
            <button className="w-[20%] h-[70%] rounded-3xl text-white bg-gradient-to-r from-[#FF5196] via-[#7782FF] to-[#25F6FF]">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
