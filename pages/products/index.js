/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Head from "next/head";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";

export default function Products() {
  return (
    <div>
      <Header />
      <Head>
        <title>Floyya | Products</title>
      </Head>
      <div className="text-[40px] pt-40 text-center font-muthiara md:pl-0">
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
          height={600}
          width={500}
          webLink={"/products/nights"}
        />
        <ProductCard
          imageLink={"/imgs/air.jpeg"}
          title="Floyya Air Fresh"
          webLink={"/products/air"}
        />
        <ProductCard
          imageLink={"/imgs/ultra.jpeg"}
          title="Floyya Ultra Clean"
          webLink={"/products/ultra"}
        />
      </div>

      <Footer />
    </div>
  );
}
