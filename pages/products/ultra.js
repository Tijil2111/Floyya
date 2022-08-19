import React from "react";
import Header from "../../components/Header";
import Head from "next/head";
import ReactStars from "react-stars";

export default function Ultra() {
  return (
    <div>
      <Header />

      <Head>
        <title>Floyya | Ultra </title>
      </Head>
      <div className="text-[40px] pt-40 text-center font-muthiara md:pl-0">
        Floyya Ultra Clean
      </div>
      <div className="flex flex-wrap justify-center pt-20">
        <img
          src="/imgs/ultra.jpeg"
          className="h-[500px] w-[500px] rounded-md"
        ></img>
        <div className="flex flex-col w-[500px]">
          <div className="font-poppinsLight text-xl lg:pl-20 lg:pt-20 lg:pb-2  lg:w-[800px]">
            You receive our No. 1 Hygienic Protection with FloyyaUltra Clean. It
            contains a germ-lock technology that completely seals in moisture,
            odour, and bacteria. For a longer-lasting coverage that will allow
            you to have worry-free periods, it is almost 40% longer.
          </div>
          <div className="font-poppinsLight text-xl lg:pl-20  lg:pb-2  lg:w-[800px]">
            The Dri-Weave Cover makes sure that the blood from your period is
            quickly absorbed, and it has a pleasant aroma for all-day freshness.
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
