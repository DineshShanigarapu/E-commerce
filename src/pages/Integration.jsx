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
      if (filterType === 'clear') {
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
        {/* Sidebar */}
        <FilterSidebar
          isOpen={isOpen}
          toggleSidebar={() => setIsOpen(!isOpen)}
          filters={filters}
          updateFilters={updateFilters}
        />
  
        {/* Main Content */}
        <div className="flex-1 p-6">
          <button
            onClick={() => setIsOpen(true)}
            className="p-3 bg-black text-white rounded-md mb-4"
          >
            Open Filters
          </button>
          <NewArrivals filters={filters} />
        </div>
  
        {/* Overlay Background (Optional) */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    );
  }