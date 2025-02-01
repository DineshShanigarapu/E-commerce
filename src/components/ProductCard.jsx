import React from 'react';

const ProductCard = ({ image, name, price, colors, sizes }) => {
  return (
    <div className="relative max-w-sm rounded overflow-hidden shadow-lg m-4 md:max-w-md lg:max-w-lg">
      <div className="relative group">
        <img className="w-full h-48 object-cover sm:h-56 md:h-64 lg:h-72" src={image} alt={name} />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white p-2 rounded-full mx-2">
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h18v2H3V3zm2 4h14l-1.34 7.45c-.12.66-.67 1.16-1.34 1.16H6.68c-.67 0-1.22-.5-1.34-1.16L4 7zM6 21v-2h12v2H6z"/>
            </svg>
          </button>
          <button className="bg-white p-2 rounded-full mx-2">
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 6l3 6 6 6 6-6 3-6h-6l-6 6-6-6H3zm18 8v6H3v-6h18zm-3-7h-3l3 3V7z"/>
            </svg>
          </button>
          <button className="bg-white p-2 rounded-full mx-2">
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="px-4 py-3 sm:px-6 sm:py-4">
        <div className="text-lg font-semibold mb-2 sm:text-xl">{name}</div>
        <p className="text-gray-700 text-base sm:text-lg">${price}</p>
        <div className="mt-2 text-sm sm:text-base">
          <span className="font-semibold">Colors:</span> {colors.join(', ')}
        </div>
        <div className="mt-2 text-sm sm:text-base">
          <span className="font-semibold">Sizes:</span> {sizes.join(', ')}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
