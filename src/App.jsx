import React from "react";
import Navbar from "./components/Navbar";
import HeroSec from "./components/HeroSec";
import Category from "./components/Category";
import "./index.css";
import FruitsSec from "./components/FruitsSec";
import BrakefastSec from "./components/BrakefastSec";
import BannerSec from "./components/BannerSec";
import BlogSec from "./components/BlogSec";
import NewsLetterSec from "./components/NewsLetterSec";
import ActivitySec from "./components/ActivitySec";
import FooterSec from "./components/FooterSec";

function App() {


  return (
    <>

      <main className="bg-gray-300 ">
        <Navbar />
        <HeroSec />
        <Category />
        <FruitsSec />
        <BrakefastSec />
        <BannerSec />
        <BlogSec />
        <ActivitySec />
        <NewsLetterSec />
        <FooterSec />
      </main>
    </>
  );
}

export default App;
