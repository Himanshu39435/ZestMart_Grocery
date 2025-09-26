import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";
import ProductCard from "../components/ProductCard";

function ProductCategory() {
  const { products } = useAppContext();
  const { category } = useParams();

  // Check if category exists in categories list
  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category
  );

  // Filter products by category
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category
  );

  return (
    <div className="mt-16 flex flex-col items-center">
      {/* Heading */}
      {searchCategory && (
        <div className="flex flex-col items-center w-max">
          <p className="text-2xl font-medium uppercase">
            {searchCategory.text}
          </p>
          <div className="w-16 h-0.5 bg-primary rounded-full mt-1"></div>
        </div>
      )}

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6 w-full">
          {filteredProducts
            .filter((product) => product.inStock)
            .map((singleProduct) => (
              <ProductCard key={singleProduct._id} product={singleProduct} />
            ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-2xl font-medium text-primary">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
}

export default ProductCategory;
