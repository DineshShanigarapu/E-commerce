import React, { useState } from "react";
import CategoryFilter from "./filterbar/CategoryFilter";
import AvailabilityFilter from "./filterbar/AvailabilityFilter";
import PriceFilter from "./filterbar/PriceFilter";
import BrandFilter from "./filterbar/BrandFilter";
import ColorFilter from "./filterbar/ColorFilter";
import SizeFilter from "./filterbar/SizeFilter";
import NewArrivals from "../pages/NewArrivals";

export default function Sidebar() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>

    <div className="fixed top-0 left-0 w-[32vw] h-full bg-white z-50">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-2xl font-bold flex items-center">FILTER</h2>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[75vh]">
        <div className="border-b pb-4">
          <h3
            className="text-xl cursor-pointer mb-2"
            onClick={() => toggleSection("category")}
          >
            Product Categories
          </h3>
          {expandedSection === "category" && <CategoryFilter />}
        </div>

        <div className="border-b pb-4">
          <h3
            className="text-xl cursor-pointer mb-2"
            onClick={() => toggleSection("availability")}
          >
            Availability
          </h3>
          {expandedSection === "availability" && <AvailabilityFilter />}
        </div>

        <div className="border-b pb-4">
          <h3
            className="text-xl cursor-pointer mb-2"
            onClick={() => toggleSection("price")}
          >
            Price
          </h3>
          {expandedSection === "price" && <PriceFilter />}
        </div>

        <div className="border-b pb-4">
          <h3
            className="text-xl cursor-pointer mb-2"
            onClick={() => toggleSection("brand")}
          >
            Brand
          </h3>
          {expandedSection === "brand" && <BrandFilter />}
        </div>

        <div className="border-b pb-4">
          <h3
            className="text-xl cursor-pointer mb-2"
            onClick={() => toggleSection("color")}
          >
            Color
          </h3>
          {expandedSection === "color" && (
            <div className="max-h-32 overflow-y-auto">
              <ColorFilter />
            </div>
          )}
        </div>

        <div className="border-b pb-4">
          <h3
            className="text-xl cursor-pointer mb-2"
            onClick={() => toggleSection("size")}
          >
            Size
          </h3>
          {expandedSection === "size" && <SizeFilter />}
        </div>
      </div>

      {/* Clear Filters Button */}
      <div className="p-4 border-t">
        <button
          onClick={() => setExpandedSection(null)}
          className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
        >
          Clear Filters
        </button>
      </div>
    </div>
    <NewArrivals/>
    </>

  );
}
