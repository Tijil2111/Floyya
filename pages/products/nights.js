import React from "react";
import Header from "../../components/Header";
import Head from "next/head";
import ReactStars from "react-stars";

export default function Nights() {
  return (
    <div>
      <Header />
      <Head>
        <title>Floyya | Nights </title>
      </Head>
      <div className="text-[40px] pt-40 text-center font-muthiara md:pl-0">
        Floyya Nights-Free
      </div>
      <div className="flex flex-wrap justify-center pt-20">
        <img
          src="/imgs/nights.jpeg"
          className="h-[500px] w-[500px] rounded-md"
        ></img>
        <div className="flex flex-col w-[500px]">
          <div className="font-poppinsLight text-xl lg:pl-20 lg:pt-20 lg:pb-2  lg:w-[800px]">
            Floyya Nights-free is our number one night protection. Its longer
            length and wider back keep you safe from leaks from all sides. You
            can sleep worry-free during your periods with this pad because it
            provides up to 0% leakage all night long.
          </div>
          <div className="font-poppinsLight text-xl lg:pl-20  lg:pb-2  lg:w-[800px]">
            It contains a dual-action gel that both neutralises odour and locks
            in moisture. Its Dri-Weave Cover absorbs period blood in seconds,
            allowing you to sleep comfortably all night.
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
            value="5"
          />
          <div className="font-poppinsSemiBold lg:pl-20">5 Stars</div>
        </div>
      </div>
    </div>
  );
}
