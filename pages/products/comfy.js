import React from "react";
import Header from "../../components/Header";
import Head from "next/head";
import ReactStars from "react-stars";

export default function Comfy() {
  return (
    <div>
      <Header />
      <Head>
        <title>Floyya | Comfy </title>
      </Head>
      <div className="text-[40px] pt-40 text-center font-muthiara md:pl-0">
        Floyya Comfy Max
      </div>
      <div className="flex flex-col items-center justify-center pt-20">
        <img
          src="/imgs/comfy.jpeg"
          className="h-[500px] w-[500px] rounded-md"
        ></img>
        <div className="flex flex-col w-[500px]">
          <div className="font-poppinsLight text-xl pt-10 ">
            Up to 100% stain protection is provided by Floyya Comfy-Max. Its
            whole leak guard and roughly 50mm longer length than conventional
            pads shield you from leaks on all sides.
          </div>
          <div className="font-poppinsLight text-xl pt-2">
            Your period will be comfortable thanks to the blue core's
            liquid-lock magic gel locking in the moisture. Its wings hug
            securely around your underwear to hold the pad in place, and its
            floral aroma keeps you feeling young even when you're having a
            period.
          </div>
          <div className="font-poppinsSemiBold pt-10 lg:pl-20">
            Rs- 160 Per Pack (12 Pads Inside)
          </div>
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            className="lg:pl-20 pt-10"
            edit="false"
            value="4.5"
          />
          <div className="bg-gradient-to-r from-main-light via-main-mid-1 to-main-dark h-[60px] w-[115px] font-poppinsSemiBold text-white flex justify-center items-center rounded-lg cursor-pointer hover:bg-white hover:h-[65px] hover:w-[120px] transition-all self-center">
            Order Now
          </div>
          <div className="font-poppinsSemiBold lg:pl-20">4 Stars</div>
        </div>
      </div>
    </div>
  );
}
