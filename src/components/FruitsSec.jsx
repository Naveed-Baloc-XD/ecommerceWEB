import React from "react";
import ProductCard from "./ProductCard";
const data1 = [
  { id: 0, img: "/product__1.webp", name: "Dreid Mango", price: "$500" },
  { id: 1, img: "/product__2.webp", name: "Crunchy Crisps", price: "$300" },
  { id: 2, img: "/product__3.webp", name: "Jewel Cranberries", price: "$200" },
  { id: 3, img: "/product__4.webp", name: "Almond Organic", price: "$100" },
];

const FruitsSec = () => {
  return (
    <div className="container pt-16 ">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-medium">Fruits & Vegetables</h3>
          <p className=" text-gray-500 mt-1 text-[12px]">
            Buy farm fresh fruits and vegetables online at the best prices
          </p>
        </div>

        <div className="space-x-4 hidden sm:block mt-8 lg:mt-0">
          <button className="feature-btn">Fruits</button>
          <button className="text-gray-500 hover:text-mcolor">
            Vegetables
          </button>
          <button className="text-gray-500 hover:text-mcolor">
            Bread & Bakery
          </button>
        </div>
      </div>

      <section className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 py-8 gap-2 ">
        <div className="mb-5 md:mb-0">
          <img
            className="w-full h-full  object-cover overflow-hidden rounded-lg "
            src="/feature__1.webp"
            alt="banner"
          />
        </div>
        {data1.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
          />
        ))}
      </section>
    </div>
  );
};

export default FruitsSec;
