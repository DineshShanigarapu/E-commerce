import React from 'react';

export default function ShopByCategories() {
    const categories = [
      { name: "Clothing", image: "https://ecomusnext-themesflat.vercel.app/images/collections/collection-17.jpg" },
      { name: "Sunglasses", image: "https://ecomusnext-themesflat.vercel.app/images/collections/collection-14.jpg" },
      { name: "Bags", image: "https://ecomusnext-themesflat.vercel.app/images/collections/collection-18.jpg" },
    ];
  
    return (
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button className="p-2 border rounded-full">
            ⬅️
          </button>
          <h2 className="text-xl font-bold">SHOP BY CATEGORIES</h2>
        </div>
  
        {/* Categories Grid */}
        <div className="flex gap-6 overflow-x-auto">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center rounded-xl p-4 ">
              <img src={category.image} alt={category.name} className="rounded-lg w-80 h-auto" />
              <span className="mt-3 px-3 py-1 bg-white shadow rounded">{category.name}</span>
            </div>
          ))}
  
          {/* "Discover All New Items" Card */}
          <div className="flex flex-col justify-center items-center border rounded-xl w-60 p-6">
            <h3 className="text-lg font-semibold text-center">Discover all new items</h3>
            <button className="mt-4 p-3 border rounded-full">➡️</button>
          </div>
        </div>
      </div>
    );
  }

                                                                                                                                                                                            