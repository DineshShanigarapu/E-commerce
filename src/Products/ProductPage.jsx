import React, { useState } from 'react';
import MainComponent from './MainComponent';
import CountdownTimer from './CountdownTimer';

const ProductPage = () => {
  const images = [
    
    'https://ecomusnext-themesflat.vercel.app/images/shop/products/hmgoepprod.jpg',
    'https://ecomusnext-themesflat.vercel.app/images/shop/products/hmgoepprod2.jpg',
    'https://ecomusnext-themesflat.vercel.app/images/shop/products/hmgoepprod3.jpg',
    'https://ecomusnext-themesflat.vercel.app/images/shop/products/hmgoepprod5.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Beige');

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <div className="w-full bg-white">
      <header className="p-4">
        <nav className="container mx-auto">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600">Home</a></li>
            <li><span className="text-gray-400">/</span></li>
            <li><a href="#" className="text-gray-600">Case with MagSafe</a></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section (Image Section) */}
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <div className="relative">
              <img src={images[currentImageIndex]} alt="Main Image" className="w-full h-auto" />
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 text-gray-600 hover:text-gray-900"
              >
                &lt;
              </button>
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 text-gray-600 hover:text-gray-900"
              >
                &gt;
              </button>
            </div>
            <div className="flex space-x-2 mt-4 lg:flex-row">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="mb-2 cursor-pointer"
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-16 h-16 object-cover border rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section (Details Section) */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-8">
            <h1 className="text-2xl">Case with MagSafe</h1>
            <span className="bg-black text-white px-2 py-1 text-sm rounded">Best Seller</span>
            <p className="mt-2 text-gray-700">Selling fast! 56 people have this in their carts.</p>
            <div className="flex items-center mt-2">
              <span className="text-red-600 text-2xl ">$19.99</span>
              <span className="text-gray-400 line-through ml-2">$10.00</span>
              <span className="bg-red-500 text-white px-2 py-1 ml-2 text-sm rounded">20% OFF</span>
            </div>
            <p className="text-gray-600 mt-2">20 People are viewing this right now</p>
<CountdownTimer/>
         
            <div className="mt-4">
              <p className="font-semibold">Color: <span className="text-black">{selectedColor}</span></p>
              <div className="flex space-x-2 mt-2">
                {['Beige', 'Black', 'Blue', 'White'].map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-black' : ''}`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className="font-semibold">Size: {selectedSize}</p>
              <div className="flex space-x-2 mt-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className={`border px-4 py-2 rounded ${selectedSize === size ? 'bg-black text-white' : 'bg-white'}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center">
              <button
                className="px-3 py-1 border h-10 rounded-l bg-gray-200 "
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              >-
              </button>
              <input
                type="text"
                className="w-12 text-center h-10  bg-gray-200 border-t border-b border-gray-300"
                value={quantity}
                readOnly
              />
              <button
                className="px-3 py-1 border h-10  rounded-r bg-gray-200"
                onClick={() => setQuantity((prev) => prev + 1)}
              >+
              </button>
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-4 mt-4 w-full">
  {/* Add to Cart Button */}
  <button className="flex-1 bg-black text-white py-2 rounded text-center">
    Add to cart - $19.99
  </button>


  <div className="flex gap-2">
  
    <button className="p-2 border rounded">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    </button>
    <button className="p-2 border rounded">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </button>

  </div>
</div>

         
            <button className="mt-2 w-full bg-yellow-400 text-black py-2 rounded">Buy with PayPal</button>
            <p className="mt-2 text-blue-600 underline cursor-pointer">More payment options</p>

            {/* Additional Information */}
            <div className="p-6">
  <div className="flex flex-wrap justify-center sm:justify-between items-center mb-6 gap-2 sm:gap-5">
    <button className="flex items-center space-x-2">
      <img src="https://ecomusnext-themesflat.vercel.app/images/item/compare.svg" alt="Compare color" className="w-6 h-6" />
      <span className="text-nowrap text-xs sm:text-sm">Compare color</span>
    </button>
    <button className="flex items-center space-x-2">
      <img src="https://cdn-icons-png.flaticon.com/128/2859/2859733.png" alt="Ask a question" className="w-6 h-6" />
      <span className="text-nowrap text-xs sm:text-sm">Ask a question</span>
    </button>
    <button className="flex items-center space-x-2">
      <img src="https://cdn-icons-png.flaticon.com/128/11475/11475435.png" alt="Delivery & Return" className="w-6 h-6" />
      <span className="text-nowrap text-xs sm:text-sm">Delivery & Return</span>
    </button>
    <button className="flex items-center space-x-2">
      <img src="https://cdn-icons-png.flaticon.com/128/2099/2099085.png" alt="Share" className="w-6 h-6" />
      <span className="text-xs sm:text-sm">Share</span>
    </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
  <div className="p-4 sm:p-6 border rounded-lg text-center">
    <img
      src="https://cdn-icons-png.flaticon.com/128/4579/4579742.png"
      alt="Delivery"
      className="w-12 h-12 mb-4 mx-auto"
    />
    <p>
      Estimated delivery times: <strong>12-26 days</strong> (International),{" "}
      <strong>3-6 days</strong> (United States).
    </p>
  </div>
  <div className="p-4 sm:p-6 border rounded-lg text-center">
    <img
      src="https://cdn-icons-png.flaticon.com/128/1585/1585147.png"
      alt="Return"
      className="w-12 h-12 mb-4 mx-auto"
    />
    <p>
      Return within <strong>30 days</strong> of purchase. Duties & taxes are
      non-refundable.
    </p>
  </div>
</div>

              <div className="text-center mb-6">
                <p className="mb-4">Guarantee Safe Checkout</p>
                <div className="flex justify-center gap-5">
                <img className="h-6" src="https://ecomus.magentech.com/media/wysiwyg/payments/visa.svg" />
            <img className="h-6" src="https://ecomus.magentech.com/media/wysiwyg/payments/paypal.svg" />
            <img className="h-6" src="https://ecomus.magentech.com/media/wysiwyg/payments/master.svg" />
            <img className="h-6" src="	https://ecomusnext-themesflat.vercel.app/images/payments/img-3.png" />
            <img className="h-6" src="https://ecomus.magentech.com/media/wysiwyg/payments/diners_club.svg" />
                </div>
              </div>
            </div>
          </div>

      </main>
    </div>
    <MainComponent/>
    </>
  );
};

export default ProductPage;
