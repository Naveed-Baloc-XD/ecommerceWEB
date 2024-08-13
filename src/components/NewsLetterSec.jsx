import React from "react";
import { LuMailOpen } from "react-icons/lu";

const NewsLetterSec = () => {
  return (
    <div className="bg-mdark mt-16">
      <main className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <section className="flex flex-shrink-0 items-center gap-4">
          <LuMailOpen className="text-[60px]" />
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold ">
              Sign up to our NewsLetters
            </h3>
            <p className="hidden sm:block">
              ...and receive $20 coupon for first shopping
            </p>
          </div>
        </section>
        <section className="w-full max-w-[400px] relative">
          <input
            type="text"
            className="py-4 px-6 w-full rounded-full hover:black-shadow outline-mcolor duration-500"
            placeholder="Your Email Address..."
          />

          <button className="bg-mdark absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:low-shadow duration-500 active:scale-90  ">
            Subscribe!
          </button>
        </section>
      </main>
    </div>
  );
};

export default NewsLetterSec;
