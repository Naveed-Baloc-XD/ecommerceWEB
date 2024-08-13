import React from "react";
import { useRef, useState } from "react";
import { BsSearch, BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { GiCrossedBones } from "react-icons/gi";
import CartBadge from "./CartBadge";

const Navbar = (props) => {
  const sideRef = useRef();
  const navRef = useRef();
  const mainRef = useRef();

  // const activeTheme = () => {
  //   navRef.current.classList.toggle("bg-black");
  // };
  // ----------------------------------
  const openMenu = () => {
    sideRef.current.classList.toggle("translate-y-0");
    sideRef.current.classList.toggle("opacity-100");
    navRef.current.classList.toggle("rounded-br-none");
  };
  const closeMenu = () => {
    sideRef.current.classList.remove("translate-y-0");
    sideRef.current.classList.remove("opacity-100");
    navRef.current.classList.remove("rounded-br-none");
  };
  // -------------------------------------
  return (
    <header
      className="container   bg-[#ffffffc1] rounded-lg sticky top-0 transition-all z-50 
 "
      ref={navRef}
    >
      <section className="flex justify-between items-center  py-2">
        <div className="w-[40px] -ml-2 sm:-ml-0 sm:w-auto">
          <h1 className="text-xl sm:text-3xl font-bold mb-[12px]cursor-pointer">
            <span className="text-green-700">&lt;</span>Lo
            <span className="text-green-700">go</span>
            <span className="text-green-700">/&gt;</span>
          </h1>
        </div>
        <div className="relative w-[40%]  md:w-[50%] max-w-[400px]">
          <input
            className="bg-gray-200 cursor-pointer hover:black-low-shadow text-[12px] duration-500 sm:text-[16px] border-gray-400 text-gray-500 border-[1px] outline-none px-5 py-1  rounded-[30px] w-full"
            type="text"
            placeholder="Search Product..."
          />
          <BsSearch
            className=" cursor-pointer absolute w-[35px] top-0 right-[-35px] md:right-[-40px] lg:right-[-47px] mt-[4px] sm:mt-[7px] text-gray-600 hover:text-gray-900 active:scale-90 duration-500"
            size={20}
          />
        </div>

        <div
          className="md:flex px-[15px] py-3 absolute rounded-b-lg bg-[#ffffffc1] md:sticky  duration-500 transition-all -top-[5px] z-40 -translate-y-[150%]
          md:-translate-y-0 opacity-0 md:opacity-100
        md:z-0 md:bg-inherit right-0  md:flex-row gap-4 mt-14 md:mt-0 

       "
          ref={sideRef}
        >
          <div
            onClick={() => activeTheme()}
            className="i-wrapper  cursor-pointer hover:black-shadow duration-500 mb-3 md:mb-0"
          >
            <BsFillMoonStarsFill />
          </div>
          <div className="i-wrapper cursor-pointer hover:black-shadow duration-500 mb-3 md:mb-0">
            <AiOutlineUser />
          </div>
          <div className="i-wrapper cursor-pointer relative hover:black-shadow duration-500 mb-3 md:mb-0">
            <AiOutlineShoppingCart />
            <CartBadge />
          </div>
          <div
            onClick={() => closeMenu()}
            className="i-wrapper hover:border-red-600 cursor-pointer relative hover:black-red md:hidden text-red-600 duration-500 "
          >
            <GiCrossedBones />
          </div>
        </div>

        {/* //////////////// */}
        <div
          onClick={() => openMenu()}
          className="i-wrapper cursor-pointer relative hover:black-shadow duration-500 md:hidden"
        >
          <CgMenuGridO />
        </div>
      </section>
    </header>
  );
};

export default Navbar;
