import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ShopByCategories() {
  const categories = [
    { name: "Clothing", image: "https://ecomusnext-themesflat.vercel.app/images/collections/collection-17.jpg" },
    { name: "Sunglasses", image: "https://ecomusnext-themesflat.vercel.app/images/collections/collection-14.jpg" },
    { name: "Bags", image: "https://ecomusnext-themesflat.vercel.app/images/collections/collection-18.jpg" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">SHOP BY CATEGORIES</h2>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
      {categories.map((category, index) => (
          <div
            key={index}
            className="relative flex items-center overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover rounded-md"
            />
             <button className="absolute bottom-4 left-16 transform -translate-x-1/2 px-4 py-2 bg-white shadow-md rounded text-sm font-semibold  hover:text-white transition">
              {category.name}
            </button>
   
          </div>
        ))}
        <div className="flex flex-col justify-center items-center bg-gradient-to-r border border-black transition duration-300 rounded-lg p-6">
          <h3 className="text-xl font-bold text-center text-gray-800">Discover New Arrivals</h3>
          <p className="text-sm text-gray-600 mt-2 text-center px-4">
            Explore the latest collections and trending products.
          </p>
          <button className="mt-5 px-6 py-3 bg-black text-white rounded-full font-semibold shadow-md hover:bg-gray-900 transition">
           <a href='/newarrivals'> Shop Now →</a>
          </button>
        </div>
      </div>
    </div>
  );
}
