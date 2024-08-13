import React from "react";

const CartBadge = ({ size }) => {
  return (
    <div className="absolute bg-red-600 text-white text-[10px] ${size} -right-[10px] -top-1 rounded-full grid place-items-center w-[18px] h-[18px]">
      3
    </div>
  );
};

export default CartBadge;
