import React from "react";
import { BsArrowRight } from "react-icons/bs";

const HeroSec = () => {
  return (
    <div className="container pb-8 pt-4 md:8 min-h-[90vh]">
      <main className=" sm:flex ">
        <section
          className="relative w-[100%] mb-[52px]
        sm:mb-0"
        >
          <img
            className="sm:w-[95%] w-full    h-[95vh]  sm:h-[100%]  object-cover rounded-lg"
            src="/hero__1.webp"
            alt="Hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-x-[10%] -translate-y-[45%] md:space-y-4 sm:space-y-2">
            <p className="text-[20px] hidden sm:block">
              100% Original Dry Fruits
            </p>
            <h2 className="text-2xl sm:text-4xl  font-bold ">
              Dried fruits Best Quality
            </h2>
            <p
              className="text-gray-500 text-xl  sm:pb-0 sm:pt-5
            "
            >
              Satarting At
            </p>
            <div className="font-medium text-red-500 text-2xl sm:text-3xl sm:pb-6 pb-2">
              $18.6
            </div>
            <div
              className="bg-[#1bbd06]
            active:scale-110 low-shadow
            hover:high-shadow duration-500    w-fit rounded-full flex items-center gap-4 px-4 py-2 text-[14px] sm:px-4 sm:py3 cursor-pointer font-semibold"
            >
              Shop Now <BsArrowRight />
            </div>
          </div>
        </section>
        <section className="flex flex-col md:py-[42px]  lg:py-[25px] sm:py-[55px] gap-14 py-2">
          <div className="relative">
            <img
              className=" w-full  h-[50vh] object-cover rounded-lg"
              src="/hero__2.webp"
              alt=""
            />
            <div className="absolute sm:ml-16 ml-16 top-[35%] sm:-translate-y-[37%]  -translate-y-[20%] -translate-x-[30%] md:space-y-4 sm:space-y-2">
              <h2 className="text-2xl font-bold pb-2 sm:pb-0">Yummy Pizza</h2>
              <p
                className="text-gray-500 text-xl pb-1 sm:pb-0
            "
              >
                Satarting At
              </p>
              <div className="font-medium sm:pb-0 pb-1 text-red-600 text-2xl">
                $25
              </div>
              <div
                className="bg-[#1bbd06]
            active:scale-110 low-shadow 
            hover:high-shadow duration-500  w-fit rounded-full flex items-center gap-4 px-4 py-2 text-[14px] sm:px-4 sm:py3 cursor-pointer font-semibold"
              >
                Buy Now
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full  h-[50vh] object-cover rounded-lg"
              src="/hero__3.webp"
              alt=""
            />
            <div className="absolute sm:ml-16 ml-16 top-[35%] sm:-translate-y-[37%]  -translate-y-[20%] -translate-x-[30%] md:space-y-4 sm:space-y-2">
              <h2 className="text-2xl font-bold pb-2 sm:pb-0">Yummy Chips</h2>
              <p
                className="text-gray-500 text-xl sm:pb-0 pb-1
            "
              >
                Satarting At
              </p>
              <div className="font-medium pb-1 sm:pb-0 text-red-600 text-2xl">
                $10
              </div>
              <div
                className="bg-[#1bbd06]
            active:scale-110 low-shadow 
            hover:high-shadow duration-500  w-fit rounded-full flex items-center gap-4 px-4 py-2 text-[14px] sm:px-4 sm:py3 cursor-pointer font-semibold"
              >
                Buy Now
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HeroSec;
