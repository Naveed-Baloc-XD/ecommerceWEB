import React from "react";
import { AiFillStar, AiOutlineShopping, AiOutlineStar } from "react-icons/ai";

const ProductCard = (props) => {
  return (
    <div className="border border-gray-400 hover:black-shadow mb-5 md:mb-0 sm:hover:scale-105 hover:scale-95 overflow-hidden rounded-lg duration-300 relative">
      <img src={props.img} alt="{name}" />
      <div className="space-y-2 relative p-4">
        <div className="text-yellow-400 flex gap-[2px] text-[20px``]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        <h3 className="font-medium">{props.name}</h3>
        <h3 className="font-medium text-2xl text-red-600">{props.price}</h3>
        <div className="absolute -top-4 right-2 bg-[#1bbd06] text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer">
          <AiOutlineShopping />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
