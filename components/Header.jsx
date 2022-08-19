import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gradient-to-r from-main-light via-main-mid-1 to-main-dark h-[90px] flex items-center fixed w-[100%]  z-20">
      <div className="text-white mx-6 text-[35px] md:text-[40px] font-bold cursor-pointer font-muthiara">
        <Link href="/"> Floyya</Link>
      </div>
      <div className="hidden md:flex md:gap-5 md:ml-auto md:mx-5">
        <div className="text-white text-[20px] cursor-pointer link link-underline link-underline-black font-poppinsSemiBold">
          <Link href="/about"> about</Link>
        </div>
        <div className="text-white text-[20px] cursor-pointer link link-underline link-underline-black font-poppinsSemiBold">
          <Link href="/educate"> educate</Link>
        </div>
        <div className="text-white text-[20px] cursor-pointer link link-underline link-underline-black font-poppinsSemiBold">
          <Link href="/products"> products</Link>
        </div>

        <div className="text-white text-[20px] cursor-pointer link link-underline link-underline-black font-poppinsSemiBold">
          our planet
        </div>
      </div>
      <div
        className={`md:hidden fixed top-[90px] flex flex-col pt-[20%] items-center gap-10 ${
          open ? "right-[0px]" : "right-[-50%]"
        } h-screen w-[50%] transition-all duration-1000 ease-in-out bg-gradient-to-r from-main-light via-main-mid-1 to-main-dark border-black border-l-2 rounded-md`}
      >
        <div className="text-white text-[20px] cursor-pointer link link-underline link-underline-black ">
          <Link href="/about"> about</Link>
        </div>
        <div className="text-white text-[20px] cursor-pointer link link-underline link-underline-black ">
          <Link href="/educate"> educate</Link>
        </div>
        <div className="text-white text-[20px] cursor-pointer link link-underline link-underline-black ">
          <Link href="/products"> products</Link>
        </div>

        <div className="text-white text-[20px] cursor-pointer link link-underline link-underline-black ">
          our planet
        </div>
      </div>
      {open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 md:hidden ml-auto mx-5 flex cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={2}
          onClick={() => {
            setOpen(false);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 md:hidden ml-auto mx-5 flex cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={2}
          onClick={() => {
            setOpen(true);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </div>
  );
}
