import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoIosHeartHalf } from "react-icons/io";
import { FaFire } from "react-icons/fa";
const ActivitySec = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-bold tracking-wide title-font mb-4 text-gray-900">
            Activity Dailly Base
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            We are very lucky because of that we have a huge customer serface.
            They are supporting as well tehy can. You can see about our dailly
            base activity:
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 hover:scale-105 duration-500 hover:black-low-shadow  hover:border-gray-500 border-gray-400 px-4 py-6 rounded-lg">
              <FaBasketShopping className="text-mcolor w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Orders</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 hover:scale-105 duration-500 hover:black-low-shadow  hover:border-gray-500 border-gray-400 px-4 py-6 rounded-lg">
              <CgProfile className="text-mcolor w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.1K
              </h2>
              <p className="leading-relaxed">New Customers</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 hover:scale-105 duration-500 hover:black-low-shadow  hover:border-gray-500 border-gray-400 px-4 py-6 rounded-lg">
              <IoIosHeartHalf className="text-mcolor w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Complete Orders</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 hover:scale-105 duration-500 hover:black-low-shadow  hover:border-gray-500 border-gray-400 px-4 py-6 rounded-lg">
              <FaFire className="text-mcolor w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2.2k
              </h2>
              <p className="leading-relaxed">Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySec;
