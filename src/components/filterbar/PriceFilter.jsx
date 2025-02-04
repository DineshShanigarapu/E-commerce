import React, { useState } from 'react';

export default function PriceFilter() {
    const [priceRange, setPriceRange] = useState([20, 80]);

    // Handle slider value changes
    const handleSliderChange = (index, value) => {
        const newPriceRange = [...priceRange];
        newPriceRange[index] = value;

        // Ensure the min value is not greater than the max value and vice versa
        if (newPriceRange[0] > newPriceRange[1]) {
            newPriceRange[1] = newPriceRange[0];
        } else if (newPriceRange[1] < newPriceRange[0]) {
            newPriceRange[0] = newPriceRange[1];
        }

        setPriceRange(newPriceRange);
    };

    return (
        <div className="price-bar-container p-4">

            {/* Price Range Sliders */}
            <div className="relative mt-2">
                {/* Slider for Min Price */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[0]}
                    onChange={(e) => handleSliderChange(0, +e.target.value)}
                    className="absolute w-full h-2 bg-gray-300 pointer-events-none"
                    style={{ zIndex: 1 }}
                />

                {/* Slider for Max Price */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => handleSliderChange(1, +e.target.value)}
                    className="absolute w-full h-2 bg-gray-300 pointer-events-none"
                    style={{ zIndex: 2 }}
                />

                {/* Price Range Bar */}
                <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-2 bg-transparent">
                    <div
                        className="absolute h-2 bg-black"
                        style={{
                            left: `${priceRange[0]}%`,
                            right: `${100 - priceRange[1]}%`,
                        }}
                    ></div>
                </div>

                {/* Slider Handles */}
                <div className="relative flex justify-between">
                    <span
                        className="w-3 h-3 bg-black rounded-full absolute"
                        style={{ left: `${priceRange[0]}%` }}
                    ></span>
                    <span
                        className="w-3 h-3 bg-black rounded-full absolute"
                        style={{ left: `${priceRange[1]}%` }}
                    ></span>
                </div>
            </div>

            {/* Display Selected Price Range */}
            <div className="mt-4 text-gray-700">
                <span className="text-sm">Price: </span>
                <span className="font-semibold">${priceRange[0]} - ${priceRange[1]}</span>
            </div>
        </div>
    );
}