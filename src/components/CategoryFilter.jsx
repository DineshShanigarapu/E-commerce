import React, { useState } from "react";

export default function CategoryFilter() {
  const categories = ["Fashion", "Men", "Women", "Denim", "Dress"];
  
  return (
    <div>
      <h3 className="font-semibold text-lg mb-2"></h3>
      <ul className="space-y-1">
        {categories.map((category, index) => (
          <li key={index} className="text-gray-700 cursor-pointer hover:underline">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
