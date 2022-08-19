/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
export default function about() {
  return (
    <div>
      <Head>
        <title>Floyya | About</title>
      </Head>
      <Header />
      <div className="text-[40px] pt-40 text-center font-muthiara">
        About Us
      </div>
      <div className="text-[20px] pt-10 text-center font-poppinsSemiBold">
        These are the people who made this possible
      </div>
      <div className="flex flex-wrap flex-row gap-14 justify-center  pt-20  font-poppinsLight pl-10 text-[20px]">
        <div className="flex flex-col h-[400px] w-[300px] bg-gradient-to-r from-main-light via-main-mid-1 to-main-dark rounded-md">
          <img
            src="/imgs/user.png"
            height={50}
            width={50}
            alt="Image 1"
            className="self-center pt-10 "
          />
          <div className="self-center pt-10 font-poppinsSemiBold text-white text-[20px]">
            Kenisha Bhansali, 14
          </div>
          <div className="self-center text-center pt-10 pl-5 pr-5 font-poppinsLight text-white text-[15px]">
            An avid designer who is interested in photography and learning new
            skills.
          </div>
        </div>
        <div className="flex flex-col h-[400px] w-[300px] bg-gradient-to-r from-main-light via-main-mid-1 to-main-dark rounded-md">
          <img
            src="/imgs/user.png"
            height={50}
            width={50}
            alt="Image 1"
            className="self-center pt-10 "
          />
          <div className="self-center pt-10 font-poppinsSemiBold text-white text-[20px]">
            Tijil Agrawal, 13
          </div>
          <div className="self-center text-center pt-10 pl-5 pr-5 font-poppinsLight text-white text-[15px]">
            An innovator, thinker, coder and a nerd. He loves creating websites
            and apps and tries to learn new tech stacks each day.
          </div>
        </div>
        <div className="flex flex-col h-[400px] w-[300px] bg-gradient-to-r from-main-light via-main-mid-1 to-main-dark rounded-md">
          <img
            src="/imgs/user.png"
            height={50}
            width={50}
            alt="Image 1"
            className="self-center pt-10 "
          />
          <div className="self-center pt-10 font-poppinsSemiBold text-white text-[20px]">
            Pratyaksh Jain, 15
          </div>
          <div className="self-center text-center pt-10 pb-5 pl-5 pr-5 font-poppinsLight text-white text-[15px]">
            Reading and Writing Enthusiast .He got to know a lot about the pain
            women go through and a small of contribution from his side in
            helping towards their aid and devolpment. Got inspired to take this
            product owing to the social stigma and lack of awareness.
          </div>
        </div>
        <div className="flex flex-col h-[400px] w-[300px] bg-gradient-to-r from-main-light via-main-mid-1 to-main-dark rounded-md">
          <img
            src="/imgs/user.png"
            height={50}
            width={50}
            alt="Image 1"
            className="self-center pt-10 "
          />
          <div className="self-center pt-10 font-poppinsSemiBold text-white text-[20px]">
            Shalini Mukhopadhyay, 15
          </div>
          <div className="self-center text-center pt-10 pl-5 pr-5 font-poppinsLight text-white text-[15px]">
            Thinker, gamer and an art enthusiast. Seeing women suffer in the
            rural areas, she decided to revolutionize women pads.
          </div>
        </div>
      </div>
      <div className="text-[30px] pt-[60px] text-center font-poppinsSemiBold">
        Why we chose this product ?
      </div>
      <div className="p-10 pt-20 text-center font-poppinsLight">
        Sanitary pads - still one of the most stigmatised topics of our society.
        Menstruation is still considered a taboo in Indian society. Even today,
        the cultural and social influences prevent adolescent girls from getting
        proper knowledge or protection on menstrual hygiene.This is not
        something that should be discriminated against on the basis of urban and
        rural. While the women in the urban areas definitely are in a better
        condition than the ones in rural areas whose sanitary conditions are
        terrible, they too have their fair share of hardships.
      </div>
      <div className=" p-10 pt-1 pb-20 text-center font-poppinsLight">
        The lockdown had seen girls and women resorting to using socks and old
        newspapers during menstruation times as sanitary items became either
        expensive or harder to procure. Because when most of the shops were
        selling basic necessities for a reduced price we noticed that women
        hygiene products such as Sanitary napkins were not included in that
        list. Floyya is a teen initiative to provide sanitary napkins to the
        people who need them and to destigmatize the taboo still prevalent in
        our country through various steps taken. Being a teen, i.e the the
        future of our nation, we believe that it is our moral responsibility to
        break the age old stereotypes and normalise the topic of menstruation,
        especially for the male section of the society.
      </div>
      <Footer />
    </div>
  );
}
