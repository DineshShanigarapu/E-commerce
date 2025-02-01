import React, { useState } from "react";

export default function ColorFilter() {
  const colors = [
    { name: "Orange", code: "#FFA500", count: 2 },
    { name: "Black", code: "#000000", count: 5 },
    { name: "White", code: "#FFFFFF", count: 3 },
    { name: "Brown", code: "#A52A2A", count: 1 },
    { name: "Light Purple", code: "#D8BFD8", count: 4 },
    { name: "Red", code: "#FF0000", count: 3 },
    { name: "Green", code: "#008000", count: 2 },
    { name: "Yellow", code: "#FFFF00", count: 1 },
    { name: "Pink", code: "#FFC0CB", count: 3 },
  ];

  const [selectedColors, setSelectedColors] = useState([]);

  const toggleColorSelection = (colorName) => {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(colorName)
        ? prevSelectedColors.filter((name) => name !== colorName)
        : [...prevSelectedColors, colorName]
    );
  };

  return (
    <div>
      <div className="flex flex-col gap-2 max-h-32 overflow-y-auto">
        {colors.map((color, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full border ${selectedColors.includes(color.name) ? "border-black" : "border-gray-300"}`}
              style={{ backgroundColor: color.code, cursor: "pointer" }}
              onClick={() => toggleColorSelection(color.name)}
            ></div>
            <span className="text-xs ml-2">{color.name} ({color.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
