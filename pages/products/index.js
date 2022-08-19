/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Head from "next/head";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";

export default function Products() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="pt-[90px] self-center w-[100%]">
        <div className="p-10 h-[90px] flex justify-center pt-8 text-white font-poppinsSemiBold bg-black">
          10% discount when you buy physically and extra 5% discount when men
          approach the counter
        </div>
      </div>
      <Head>
        <title>Floyya | Products</title>
      </Head>
      <div className="text-[40px] pt-32 text-center font-muthiara md:pl-0">
        Products
      </div>
      <div className="text-[20px] pt-10 text-center font-poppinsSemiBold">
        Choose the Floyya sanitary pad that best suits your needs by perusing
        our extensive selection.
      </div>
      <div className="flex flex-wrap flex-row gap-14 justify-center  pt-20 pb-20 font-poppinsLight pl-10 text-[20px]">
        <ProductCard
          imageLink={"/imgs/comfy.jpeg"}
          title="Floyya Comfy Max"
          height={500}
          width={500}
          webLink={"/products/comfy"}
        />
        <ProductCard
          imageLink={"/imgs/nights.jpeg"}
          title="Floyya Nights Free"
          height={500}
          width={500}
          webLink={"/products/nights"}
        />
        <ProductCard
          imageLink={"/imgs/air.jpeg"}
          title="Floyya Air Fresh"
          height={500}
          width={500}
          webLink={"/products/air"}
        />
        <ProductCard
          imageLink={"/imgs/ultra.jpeg"}
          title="Floyya Ultra Clean"
          height={500}
          width={500}
          webLink={"/products/ultra"}
        />
      </div>

      <Footer />
    </div>
  );
}
