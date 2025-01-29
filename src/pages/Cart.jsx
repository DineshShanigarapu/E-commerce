import React, { useState } from 'react';

const images = [
  'https://ecomusnext-themesflat.vercel.app/images/products/bark-phone-blue.jpg',
  'https://ecomusnext-themesflat.vercel.app/images/shop/products/hmgoepprod.jpg',
  'https://ecomusnext-themesflat.vercel.app/images/shop/products/hmgoepprod2.jpg',
  'https://ecomusnext-themesflat.vercel.app/images/shop/products/hmgoepprod3.jpg',
];

const Cart = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-1/2 bg-white">
      <header className="bg-gray-100 p-4">
        <nav className="container mx-auto">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600">Home</a></li>
            <li><span className="text-gray-400">/</span></li>
            <li><a href="#" className="text-gray-600">Case with MagSafe</a></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <div className="flex">
          <div className="w-1/4">
            {images.map((image, index) => (
              <div key={index} className="mb-4 cursor-pointer" onClick={() => setCurrentImageIndex(index)}>
                <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full" />
              </div>
            ))}
          </div>
          <div className="w-3/4 relative">
            <img src={images[currentImageIndex]} alt="Current view" className="w-full" />
            <button onClick={handlePrevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200">{"<"}</button>
            <button onClick={handleNextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200">{">"}</button>
          </div>
        </div>
      </main>
    </div>
  );
};

const Item = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Beige");

  return (
    <div className="w-1/2 bg-gray-50 p-4">
      
      <main className="p-4">
        <h1 className="text-2xl font-semibold">Case with MagSafe</h1>
        <span className="bg-black text-white px-2 py-1 text-sm rounded">Best Seller</span>
        <p className="mt-2 text-gray-700">Selling fast! 56 people have this in their carts.</p>
        <div className="flex items-center mt-2">
          <span className="text-red-600 text-2xl font-bold">$19.99</span>
          <span className="text-gray-400 line-through ml-2">$10.00</span>
          <span className="bg-red-500 text-white px-2 py-1 ml-2 text-sm rounded">20% OFF</span>
        </div>
        <p className="text-gray-600 mt-2">20 People are viewing this right now</p>

        <div className="bg-red-100 border border-red-500 text-red-700 p-2 mt-4 rounded">
          ⏳ HURRY UP! SALE ENDS IN: <b>128 Days : 11 Hours : 24 Mins : 48 Secs</b>
        </div>

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
            className="px-3 py-1 border rounded-l bg-gray-200"
            onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
          >-
          </button>
          <input 
            type="text" 
            className="w-12 text-center border-t border-b border-gray-300" 
            value={quantity} 
            readOnly
          />
          <button 
            className="px-3 py-1 border rounded-r bg-gray-200"
            onClick={() => setQuantity((prev) => prev + 1)}
          >+
          </button>
        </div>

        <button className="mt-4 w-full bg-black text-white py-2 rounded">Add to cart - $19.99</button>
        <button className="mt-2 w-full bg-yellow-400 text-black py-2 rounded">Buy with PayPal</button>
        <p className="mt-2 text-blue-600 underline cursor-pointer">More payment options</p>

        <div className="mt-6 text-gray-700">
          <p>📌 Compare color | ❓ Ask a question</p>
          <p>🚚 Delivery & Return | 🔗 Share</p>
        </div>

        <div className="mt-6 border p-4 rounded">
          <p>📦 Estimated delivery times: <b>12-26 days (International), 3-6 days (US)</b></p>
          <p>🔄 Return within <b>30 days</b> of purchase. Duties & taxes are non-refundable.</p>
        </div>

        <div className="mt-6 text-center">
          <p className="font-semibold">Guarantee Safe Checkout</p>
          <div className="flex justify-center space-x-2 mt-2">
            <img src="/visa.png" alt="Visa" className="w-10" />
            <img src="/paypal.png" alt="PayPal" className="w-10" />
            <img src="/mastercard.png" alt="MasterCard" className="w-10" />
            <img src="/amex.png" alt="Amex" className="w-10" />
            <img src="/discover.png" alt="Discover" className="w-10" />
          </div>
        </div>
      </main>
    </div>
  );
};

const PageLayout = () => {
  return (
    <div className="flex">
      <Cart />
      <Item />
    </div>
  );
};

export default PageLayout;
