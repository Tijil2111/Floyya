import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function planet() {
  return (
    <div>
      <Header />
      <Head>
        <title>Floyya | Planet</title>
      </Head>
      <div className="text-[40px] pt-40 text-center font-muthiara md:pl-0">
        Our Planet
      </div>
      <div className="text-[20px] pt-10 text-center font-poppinsSemiBold">
        This is how we are helping the planet
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <img
          src="/imgs/environment.svg"
          className="w-[500px] h-[500px] rounded-lg "
        />
        <div className="font-poppinsLight w-[800px] pl-10 pr-10 text-[20px]">
          Floyya helped women shift their behaviour and gave them the option of
          feeling comfortable during their period by being the first to
          introduce disposable sanitary pads. Over the years, this independence
          has given women more power, but it has also come with a duty to
          protect the environment so that women's advancement can continue into
          the future. Whether it's through the careful selection of raw
          materials for our products, the creation of more sustainable
          solutions, or the promotion of social issues, Floyya is constantly
          developing in the development of its products to support women's
          advancement and the preservation of the environment.
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <img
          src="/imgs/environment1.svg"
          className="w-[500px] h-[500px] rounded-lg "
        />
        <div className="font-poppinsLight w-[800px] pl-10 pr-10 md:pt-0 pt-10 text-[20px]">
          Being an environmentally conscious company, Floyya has always followed
          sensible rules for managing plastic waste. All Floyya polybags met
          with the relevant regulation's requirement that plastic packaging be
          thicker than 50 microns in order to improve the segregation,
          collection, and environmentally responsible recycling of plastic
          waste. Additionally, this will assist in bringing plastic back into
          the recycling mix. Floyya products go through a thorough, rigorous,
          and judicious evaluation process from the selection of the raw
          material to the finished product to guarantee your health and safety.
          In accordance with our sustainability plan, Floyya thick pads are
          created with around 75% renewable source materials.
        </div>
      </div>
      <Footer />
    </div>
  );
}
