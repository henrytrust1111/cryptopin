"use client";

import React from "react";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiMailFill } from "react-icons/ri";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-max w-full flex flex-col items-center justify-center bg-[#32302f]">
      <div className="w-[90%] h-max flex justify-between space-x-8  py-10 max-[700px]:flex-col max-[700px]:space-x-0 max-[700px]:space-y-8">
        <div className="flex flex-col space-y-7 w-[33%] max-[700px]:w-full">
         <Link href="/"> <p className="text-white text-3xl">TheCurveAfrica</p></Link>
          <div className="flex flex-col space-y-2">
            <p className="text-[#ffffff5d]">We learn by coding </p>
          </div>
        </div>
        <div className="flex flex-col space-y-7 w-[33%] max-[700px]:w-full">
          <p className="text-white text-3xl">Links</p>
          <div className="flex flex-col space-y-2">
            <Link href="/blog">
              <p className="text-[#ffffff5d]">Blog</p>
            </Link>
            <Link href="/contact">
              <p className="text-[#ffffff5d]">Contact Us</p>
            </Link>
            <Link href="/about">
              <p className="text-[#ffffff5d]">About Us</p>
            </Link>
          </div>

          <div className="flex space-x-2">
            <p className="text-white underline capitalize">English</p>
            <p className="text-[#ffffff5d]">Francais</p>
            <p className="text-[#ffffff5d]">Espanol</p>
          </div>
        </div>
      </div>
      <div className="w-full flex text-center px-12 items-center justify-center text-[#ffffff5d] py-5 bg-[#2a2928]">
        © Copyright 2024, All Rights Reserved by TheCurveAfrica .
      </div>
    </div>
  );
};

export default Footer;
