import React from "react";
import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

function Categories() {
  const { navigate } = useAppContext();

  return (
    <div className="mt-16 flex flex-col items-center">
      {/* Heading */}
      <div className="flex flex-col items-center w-max">
        <p className="text-2xl md:text-3xl font-medium">Categories</p>
        <div className="w-16 h-0.5 bg-primary rounded-full mt-1"></div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-8 gap-6 w-full">
        {categories.map((singleCategory, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/products/${singleCategory.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
            className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center transition transform hover:scale-105"
            style={{ backgroundColor: singleCategory.bgColor }}
          >
            <img
              src={singleCategory.image}
              alt={singleCategory.text}
              className="w-16 h-16 object-contain"
            />
            <p className="text-sm font-medium mt-2">{singleCategory.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
