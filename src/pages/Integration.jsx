import React, { useState } from "react";
import FilterSidebar from "../components/filterbar/FilterSidebar";
import NewArrivals from "./NewArrivals";

export default function Integration() {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: [],
    availability: { available: true, outOfStock: true },
    price: [0, 100],
    brand: { ecomus: true, msh: true },
    colors: [],
    size: [],
  });

  const updateFilters = (filterType, values) => {
    if (filterType === "clear") {
      setFilters({
        category: [],
        availability: { available: true, outOfStock: true },
        price: [0, 100],
        brand: { ecomus: true, msh: true },
        colors: [],
        size: [],
      });
    } else {
      setFilters({ ...filters, [filterType]: values });
    }
  };

  return (
    <div className="relative min-h-screen flex">
      {/* Sidebar - Always visible on large screens, hidden on small screens */}
      <div className="hidden lg:flex">
        <FilterSidebar
          isOpen={true}
          toggleSidebar={() => {}}
          filters={filters}
          updateFilters={updateFilters}
        />
      </div>

      {/* Sidebar - For small screens, controlled via button */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden">
          <FilterSidebar
            isOpen={isOpen}
            toggleSidebar={() => setIsOpen(false)}
            filters={filters}
            updateFilters={updateFilters}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Show button only on small screens */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 bg-black text-white rounded-md mb-4 lg:hidden"
        >
          Open Filters
        </button>

        <NewArrivals filters={filters} />
      </div>
    </div>
  );
}
