/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col w-[100vw]">
        <Head>
          <title>Floyya</title>
        </Head>
        <Header />
        <div>
          <div className="pt-0 bg-gradient-to-r from-main-light via-main-mid-1 to-main-dark h-[60vh] the_clip w-[150vw] md:w-screen"></div>
          <div className="flex flex-wrap p-10 md:pl-10 justify-evenly">
            <div className="w-[450px] font-poppinsLight text-[20px] pb-5 lg:pb-0">
              {" "}
              <span className="font-poppinsSemiBold">Floyya </span>sanitary
              products are designed to provide total protection and comfort
              throughout your period. We carefully considered simplicity,
              comfort, and protection when creating our pads so that you can
              experience life to the fullest.
            </div>
            <Image
              src="/imgs/bg1.png"
              height={300}
              width={500}
              alt="Image 1"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="pb-20">
          <div className="text-[40px] pt-40 font-muthiara text-center">
            Why <span className="text-main-dark">Us</span>?
          </div>

          <div className="flex flex-wrap justify-center gap-10 p-10 pb-20">
            <div className="w-[500px] h-[300px] p-5  border-solid border-2 border-main-dark rounded-md">
              <div className="font-poppinsSemiBold text-3xl text-main-mid">
                Top Sheet
              </div>
              <div className="pt-5 font-poppinsLight">
                Because it is gentle , has excellent liquid retention
                capabilities, and is an excellent top sheet, organic cotton is
                one of the best raw materials for sanitary napkins. It is supple
                and permeable, providing comfort and dryness. And aids in hassle
                free movement.
              </div>
            </div>
            <div className="w-[500px] h-[300px] sm:self-end p-5 border-solid border-2 border-main-dark rounded-md">
              <div className="font-poppinsSemiBold text-3xl text-main-mid">
                Absorbant Core
              </div>
              <div className="pt-5 font-poppinsLight">
                {`Bamboo's fibre is loaded with numerous micro-holes and micro-gaps,
              making it perfect for absorbent cores since it wicks and absorbs
              water 3–4 times better than cotton and minimises odour.`}
              </div>
            </div>
            <div className="w-[500px] h-[300px] p-5 border-solid border-2 border-main-dark rounded-md">
              <div className="font-poppinsSemiBold text-3xl text-main-mid">
                Barrier Sheet
              </div>
              <div className="pt-5 font-poppinsLight">
                An alternative sustainable replacement of petroleum- based fibre
                in the barrier sheet is the PLA (Poly Lactic Acid) fibre, which
                is derived from cornstarch.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[40px] pt-20 font-muthiara text-center pb-40">
            <span className="text-main-dark">Benefits</span>
          </div>

          <div className="flex flex-col justify-center lg:flex-row p-5 gap-10 md:pl-10">
            <Image
              src="/imgs/women.svg"
              height={300}
              width={510}
              alt="Image 1"
              className="rounded-md"
              layout="fixed"
            />
            <div className="">
              <ul className="flex flex-col font-poppinsLight gap-2 pt-2 h-[500px] md:w-[600px] md:h-[400px] md:pt-14 pl-5 pr-5 bg-main-mid-1 text-white">
                <li>
                  - These are made entirely of{" "}
                  <span className="font-poppinsSemiBold">bamboo pulp</span>{" "}
                  along with organic cotton. The organic cotton is grown through
                  a natural process to ensure your direct contact with the pad
                  is safe and secure.
                </li>
                <li>
                  - 100%{" "}
                  <span className="font-poppinsSemiBold">
                    ORGANIC AND BIODEGRADABLE
                  </span>
                  . Hence takes care of the environment and is sustainable.
                </li>
                <li>
                  - No artificial odours/ deodorants BPA or other chemicals are
                  used in our product hence considerably reducing the chances of
                  infertility and birth defects.
                </li>
                <li>
                  - The
                  <span className="font-poppinsSemiBold">
                    {" "}
                    Regular Variant is 280MM long
                  </span>{" "}
                  and the
                  <span className="font-poppinsSemiBold">
                    {" "}
                    Overnight variant is 315MM long and 55MM wide{" "}
                  </span>
                  .
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[40px] pt-20 font-muthiara text-center pb-40">
            <span className="text-main-dark">Cost Sheet</span>
          </div>
          <div className="flex flex-col lg:pl-20 lg:pr-20 justify-center">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                        >
                          Items
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                        >
                          Total Cost
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                          Raw Material
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Rs 6,00,000
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                          Wages and Salaries
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Rs 3,50,000
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                          Electricity
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Rs 30,000
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                          Water Charges
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Rs 50,000
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                          Repair and Maintainance
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Rs 5,000
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                          Insurance
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Rs 3,000
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                          Marketing
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Rs 1,00,000
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                          Rent
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Rs 40,000
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                          Depreciation(Misc)
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Rs 20,000
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                          Total Cost of Production
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Rs 11,53,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
/*
content font - poppins
nav: poppins semi bold
written content paragraphs - poppins light
*/
