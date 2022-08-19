/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
export default function ProductCard({
  imageLink,
  title,
  webLink,
  height,
  width,
}) {
  return (
    <div>
      <div className="flex flex-col h-[600px] w-[300px] rounded-md">
        <img
          src={imageLink}
          alt="Images"
          className="self-center pt-10 rounded-md h-[500px] w-[500px]"
        />
        <div className="self-center pt-10 font-poppinsSemiBold text-black text-[20px] pb-5">
          {title}
        </div>
        <Link href={webLink}>
          <div className="bg-gradient-to-r from-main-light via-main-mid-1 to-main-dark h-[60px] w-[115px] font-poppinsSemiBold text-white flex justify-center items-center rounded-lg cursor-pointer hover:bg-white hover:h-[65px] hover:w-[120px] transition-all self-center">
            View
          </div>
        </Link>
      </div>
    </div>
  );
}
