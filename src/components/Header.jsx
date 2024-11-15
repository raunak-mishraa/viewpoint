import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
import logo from "../assets/logo.svg";

const Header = React.memo(({ setOpen }) => {
  console.log("Header rendered");
  return (
    <header className="border-b h-20 bg-white fixed w-full top-0 z-10">
      <div className="px-6 sm:px-10 w-full h-full mx-auto flex items-center container">
        <div className="w-full flex justify-between">
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer"
          >
            {/* {open ?  <IoCloseOutline className='text-4xl' /> : <FiMenu className='text-4xl' />} */}
            <FiMenu className="text-4xl" />
          </div>
          <div className="flex justify-center w-full items-center space-x-2">
            <img src={logo} alt="logo" className="w-8" />
            <h1 className="text-2xl font-bold text-opacity-80 text-black">
              ViewPoint
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
