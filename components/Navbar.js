import Image from "next/image";
import React from "react";
import logo from "../assets/kickstart.png";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className=" flex items-center   justify-between py-4 px-4 md:px-8 ">
      {/* Left Side */}
      <Image src={logo} alt="" className="w-[8rem] " />

      {/* Right */}
      <div className="hidden md:flex text-white  ">
        <ul className="flex items-center gap-8 ">
          <li>
            <p className="text-[18px] font-semibold">Home</p>
          </li>
          <li className="hidden lg:flex">
            <p className="  text-[18px] font-semibold">Analytics</p>
          </li>
          <li className="hidden lg:flex">
            <p className="   text-[18px] font-semibold">Personal Vault</p>
          </li>
          <li>
            <p className="  text-[18px] font-semibold">About Us</p>
          </li>
          <li>
            <p className="text-[18px] font-semibold">SignUp</p>
          </li>
          <li>
            <p className="text-[18px] font-semibold">Login</p>
          </li>
        </ul>
      </div>
      {/* Right Side Mobile */}
      <div className="md:hidden">
        <HiOutlineMenu className=" text-white w-8 h-8" />
      </div>
    </div>
  );
};

export default Navbar;
