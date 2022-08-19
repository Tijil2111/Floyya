import React from "react";
import Header from "../../components/Header";
import Head from "next/head";
import ReactStars from "react-stars";

export default function Air() {
  return (
    <div>
      <Header />
      <Head>
        <title>Floyya | Air </title>
      </Head>
      <div className="text-[40px] pt-40 text-center font-muthiara md:pl-0">
        Floyya Air Fresh
      </div>
      <div className="flex flex-col items-center justify-center pt-20">
        <img
          src="/imgs/air.jpeg"
          className="h-[500px] w-[500px] rounded-md"
        ></img>
        <div className="flex flex-col w-[500px]">
          <div className="font-poppinsLight text-xl pt-10">
            For a comfortable period, choose Floyya Airfresh. Dermatologically
            proven, it leaves your skin feeling airy thanks to its 500 air fresh
            pores. It contains a dual-action gel that eliminates odours rather
            than just covering them up.
          </div>
          <div className="font-poppinsLight text-xl pt-2">
            With a larger back and an almost 50% longer length, it has a
            wonderful aroma that keeps you fresh all day.
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
            value={4}
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
