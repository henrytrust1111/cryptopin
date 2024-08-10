"use client";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="w-full h-max flex flex-col items-center justify-center bg-[#26211d]">
        <div className="w-[90%] h-[13vh] flex items-center justify-between text-white">
          <Link href="/">
            <span className="text-2xl font-bold max-[700px]:text-lg">
              TheCurveAfrica
            </span>
          </Link>
          <div className="flex space-x-4">
            <Link href="/signin">
              <span className="flex justify-center border w-[85px] h-[35px] items-center rounded cursor-pointer">
                Sign-in
              </span>
            </Link>
            <Link href="/signup">
              <span className="border flex justify-center w-[85px] h-[35px] items-center rounded cursor-pointer">
                Sign-up
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full h-max flex bg-[#ECC731] justify-center">
          <div className="w-[90%] h-[10vh] flex justify-between">
            <div className="w-[50%] flex items-center">
              <ul className="w-full flex justify-between items-center text-l font-semibold cursor-pointer text-[#26211D] uppercase max-[700px]:hidden">
                <li>
                  <Link href="/">
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pages">
                    <span>Pages</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span>About us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span>Contact us</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[50%] flex justify-end items-center space-x-1">
              <Link href="/">
                <span className="max-[700px]:text-white cursor-pointer">
                  Henry
                </span>
              </Link>
              <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full">
                <CgProfile className="text-2xl max-[700px]:text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
