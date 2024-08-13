import React from "react";

const BannerSec = () => {
  return (
    <main className="container py-16">
      <div className="grid rounder-lg sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="overflow-hidden   ">
          <img
            src="/banner__1.webp"
            alt="banner"
            className="hover:scale-105 duration-500"
          />
        </div>
        <div className="overflow-hidden   ">
          <img
            src="/banner__2.webp"
            alt="banner"
            className="hover:scale-105 duration-500"
          />
        </div>
        {/* //////////////////////// */}
      </div>
    </main>
  );
};

export default BannerSec;
