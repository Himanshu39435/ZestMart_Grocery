import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import BottomBanner from "../components/BottomBanner";
import NewsLetter from "../components/NewsLetter";

function Home() {
  return (
    <div className="mt-10 flex flex-col gap-20">
      {/* Hero Section */}
      <MainBanner />

      {/* Categories */}
      <Categories />

      {/* Best Seller / Featured */}
      <BestSeller />

      {/* Promotional Banner */}
      <BottomBanner />

      {/* Newsletter Signup */}
      <NewsLetter />
    </div>
  );
}

export default Home;
