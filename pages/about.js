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
        <div className="flex flex-col h-[600px] w-[300px] bg-gradient-to-r from-main-light via-main-mid-1 to-main-dark rounded-md">
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
            am a student in ninth grade. Creation and innovation are two of my
            passions. I always dreamt about coming up with an innovative idea to
            help make the world a better place. And when my seniors approached
            me with the idea of Floyya I agreed at once.
          </div>
          <div className="self-center text-center pt-2 pl-5 pr-5 font-poppinsLight text-white text-[15px]">
            Because at the end of the day, I am also a girl and to be able to do
            something to make the lives of girls easier...it just felt like my
            dream was slowly starting to come true.
          </div>
        </div>
        <div className="flex flex-col h-[600px] w-[300px] bg-gradient-to-r from-main-light via-main-mid-1 to-main-dark rounded-md">
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
            I am also a student in ninth grade. At first, I was so honoured that
            my seniors had asked me to participate in a competition with them
            and code an entire website from scratch with Kenisha. But when I got
            to know about the product I was immensely moved by it.
          </div>
          <div className="self-center text-center pt-2 pl-5 pr-5 font-poppinsLight text-white text-[15px]">
            I know that most people would shy away or feel embarrassed to talk
            about sanitary pads but I feel like it is our moral duty to break
            away from that stigma and I am so grateful that I was given a chance
            to be a part of something so huge.
          </div>
        </div>
        <div className="flex flex-col h-[600px] w-[300px] bg-gradient-to-r from-main-light via-main-mid-1 to-main-dark rounded-md">
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
            Student at Dps Noida in 11th grade, reading and writing enthusiast,
            professional binge watcher. In this competition, I got to know a lot
            about the pain women go through and a small contribution from my
            side in helping towards their aid and development.
          </div>
          <div className="self-center text-center pt-2 pb-5 pl-5 pr-5 font-poppinsLight text-white text-[15px]">
            I got inspired to take this product owing to the social stigma and
            lack of awareness regarding such a crucial sanitary product among
            people, especially men.
          </div>
        </div>
        <div className="flex flex-col h-[600px] w-[300px] bg-gradient-to-r from-main-light via-main-mid-1 to-main-dark rounded-md">
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
            I’m in class 11th. From a very young age, I was always passionate
            about helping people, bringing about a good change in society, and
            making people happy. Being a girl is always difficult and not just
            for me but for every other girl I know. And I realized this more in
            the lockdown when while talking to our househelp and her daughter.
          </div>
          <div className="self-center text-center pt-2 pl-5 pr-5 font-poppinsLight text-white text-[15px]">
            They depicted their problems in such a vivid and impactful way,
            especially the pain they go through during the menstrual cycle. And
            after that, I just had to do something to help them and also every
            person like us.
          </div>
        </div>
      </div>
      <div className="text-[30px] pt-[60px] text-center font-poppinsSemiBold">
        Why we chose this product ?
      </div>
      <div className="p-10 pt-20 text-center font-poppinsLight text-[20px]">
        Sanitary pads - still one of the most stigmatised topics of our society.
        Menstruation is still considered a taboo in Indian society. Even today,
        the cultural and social influences prevent adolescent girls from getting
        proper knowledge or protection on menstrual hygiene.This is not
        something that should be discriminated against on the basis of urban and
        rural. While the women in the urban areas definitely are in a better
        condition than the ones in rural areas whose sanitary conditions are
        terrible, they too have their fair share of hardships.
      </div>
      <div className=" p-10 pt-1 pb-20 text-center font-poppinsLight text-[20px]">
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
