"use client";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="w-full h-[70px] flex items-center justify-center">
        <div className="w-4/5 h-[70px] border-b-2 border-b-slate-200 flex items-center justify-between">
          <div className="w-[15%] h-[80%]">
            <img src="./Logo.svg" alt="" />
          </div>
          <div className="w-[50%] h-[80%] hidden lg:flex items-center justify-around ">
            <Link href='/' className="cursor-pointer">Home</Link>
            <Link href='/about' className="cursor-pointer">About</Link>
            <Link href='/pages' className="cursor-pointer">Pages</Link>
            <Link href='/pricing' className="cursor-pointer">Pricing</Link>
            <Link href='/contact' className="cursor-pointer">Contact</Link>
            <button className="w-[20%] h-[70%] rounded-3xl text-white bg-gradient-to-r from-[#FF5196] via-[#7782FF] to-[#25F6FF]">Login</button>
          </div>
          <div className="hidden max-[1024px]:flex">
              <RxHamburgerMenu />
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
