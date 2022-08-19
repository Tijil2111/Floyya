/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";

export default function educate() {
  return (
    <div>
      <Header />
      <Head>
        <title>Floyya | Educate</title>
      </Head>
      <div className="text-[40px] pt-40 text-center font-muthiara md:pl-0">
        Menstrupedia: The Essential Guide
      </div>
      <div className="flex flex-wrap justify-center font-poppinsLight pl-10 pt-32 text-[20px] gap-20">
        <img
          src="/imgs/educate1.jpeg"
          alt="educate1"
          className="h-[400px] pt-20"
        />
        <div className="flex flex-col gap-5">
          <span className="font-poppinsSemiBold text-main-mid text-2xl">
            Urban Areas
          </span>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-[500px]">
              #AuntFlo is an initiative/campaign to help the women and girls of
              the urban area.While girls do know about menstruation before they
              have it, boys should also be sensitised about the subject
              beforehand because after all #Men:APartOfTheConversation. Some Of
              the main aims of this campaign is to break the stigma even among
              the urban educated people.
            </div>
            <div className="w-[500px]">
              We are trying to normalise applying for paid leaves for working
              women. We also plan on providing a 10% discount on every pack of
              products everytime people physically visit the store to make the
              purchases to break the wall of insecurity and shame that most
              women face. We have collaborated with various schools and non
              profit organisations to conduct workshops by teens and girls and
              women who experience this phenomenon on a daily basis to make a
              bond, a connection, to make everyone feel included and to make
              young girls feel less scared and powerless.
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-[500px]">
              {`The easiest and the most influential way is by having honest
              conversations about menstruating is one of the fastest ways to
              dismantle the societal stigma placed on it. By opening up a
              dialogue about our bodies, how we feel during our periods, and
              challenges faced, we're able to create a sense of solidarity among
              people with periods.`}
            </div>
            <div className="w-[500px]">
              {`Another last step that we want to implement is to make menstruation, women's reproductive health, and sanitation an active part of the school curriculum from a very early age because every boy needs to be a part of the conversation from the very beginning. Then only the invisible barrier of age old lies and prejudices will truly be destroyed. `}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center font-poppinsLight pl-10 pt-32 text-[20px] gap-20">
        <img
          src="/imgs/educate2.jpeg"
          alt="educate1"
          className="h-[400px] pt-20"
        />
        <div className="flex flex-col gap-5">
          <span className="font-poppinsSemiBold text-main-mid text-2xl">
            Rural Areas
          </span>

          <div className="flex flex-collg:flex-row gap-5">
            <div className="w-[500px]">
              {`#Naaritva is the campaign in rural india where we plan on providing young girls and women with education and awareness and high quality products at a very low price with the help of govt funds and subsidies. 
We have collaborated with "MENSTRUPEDIA" India's very own info magazine that's all about empowering young girls who don't have access to high end resources. We plan on providing a free copy of the magazine with every first purchase made by women in the rural areas. We have also joined hands with the social welfare society of the national school of drama to perform nukkad natak, jingles, short plays and street theatre to create a more powerful impact on the young developing minds. 
`}
            </div>
            <div className="w-[500px]">
              {`In the rural area we don't only want to focus on young girls but also older women who are at the stage of menopause. Making women aware of menopausal symptoms and a few specific steps and dietary habits and and taking extra care of of the reproductive hygiene is of the itmost importance during this stage to love a healthier life in their 50s.
`}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
