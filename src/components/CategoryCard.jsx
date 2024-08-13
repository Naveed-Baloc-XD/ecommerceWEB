import React from "react";

const CategoryCard = (props) => {
  return (
    <div className="border border-gray-500  hover:black-shadow hover:scale-105 rounded-lg duration-300">
      <div className="flex justify-between items-center p-6 ">
        <div className="space-y-4">
          <h3 className="font-bold  text-[16px]">{props.name}</h3>

          <p className="text-gray-500 text-[14px]">{props.count}</p>
        </div>
        <img className=" w-[100px]" src={props.img} alt="{name}" />
      </div>
      {/*/////////////////////////////  */}
    </div>
  );
};

export default CategoryCard;
