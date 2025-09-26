import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

function BestSeller() {
  const { products } = useAppContext();

  // Filter only inStock products & pick top 5
  const bestSellers = products.filter((p) => p.inStock).slice(0, 5);

  return (
    <div className="mt-16 flex flex-col items-center">
      {/* Heading */}
      <div className="flex flex-col items-center w-max">
        <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
        <div className="w-20 h-0.5 bg-primary rounded-full mt-1"></div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 mt-8 w-full">
        {bestSellers.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
