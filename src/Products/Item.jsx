import React from 'react';

const Item = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Beige");

  return (
    <div className="w-full sm:w-1/2 p-4">
      <main className="p-4">
        <h1 className="text-2xl">Case with MagSafe</h1>
        <span className="bg-black text-white px-2 py-1 text-sm rounded">Best Seller</span>
        <p className="mt-2 text-gray-700">Selling fast! 56 people have this in their carts.</p>
        <div className="flex items-center mt-2">
          <span className="text-red-600 text-2xl ">$19.99</span>
          <span className="text-gray-400 line-through ml-2">$10.00</span>
          <span className="bg-red-500 text-white px-2 py-1 ml-2 text-sm rounded">20% OFF</span>
        </div>
        <p className="text-gray-600 mt-2">20 People are viewing this right now</p>

        <div className="border border-red-500 p-2 mt-4 rounded">
          ⏳ HURRY UP! SALE ENDS IN:<br /> <b className=' text-red-600'>128 Days : 11 Hours : 24 Mins : 48 Secs</b>
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

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-4 gap-5">
              <button className="flex items-center space-x-2">
                <img src="	https://ecomusnext-themesflat.vercel.app/images/item/compare.svg" alt="Compare color" className="w-6 h-6" />
                <span className=' text-nowrap'>Compare color</span>
              </button>
              <button className="flex items-center space-x-2">
                <img src="https://cdn-icons-png.flaticon.com/128/2859/2859733.png" alt="Ask a question" className="w-6 h-6" />
                <span className=' text-nowrap'>Ask a question</span>
              </button>
              <button className="flex items-center space-x-2">
                <img src="	https://cdn-icons-png.flaticon.com/128/11475/11475435.png" alt="Delivery & Return" className="w-6 h-6" />
                <span className=' text-nowrap'>Delivery & Return</span>
              </button>
              <button className="flex items-center space-x-2">
                <img src="https://cdn-icons-png.flaticon.com/128/2099/2099085.png" alt="Share" className="w-6 h-6" />
                <span>Share</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="p-6 border rounded-lg text-center">
              <img src="	https://cdn-icons-png.flaticon.com/128/4579/4579742.png" alt="Delivery" className="w-12 h-12 mb-4 mx-auto" />
              <p>Estimated delivery times: <strong>12-26 days</strong> (International), <strong>3-6 days</strong> (United States).</p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <img src="	https://cdn-icons-png.flaticon.com/128/1585/1585147.png" alt="Return" className="w-12 h-12 mb-4 mx-auto" />
              <p>Return within <strong>30 days</strong> of purchase. Duties & taxes are non-refundable.</p>
            </div>
          </div>
          <div className="text-center mb-6">
            <p className="mb-4">Guarantee Safe Checkout</p>
            <div className="flex justify-center gap-5">
              <img src="	https://ecomusnext-themesflat.vercel.app/images/payments/visa.png" alt="Visa" className="w-10 h-10" />
              <img src="https://ecomusnext-themesflat.vercel.app/images/payments/img-1.png" alt="PayPal" className="w-10 h-10" />
              <img src="	https://ecomusnext-themesflat.vercel.app/images/payments/img-2.png" alt="MasterCard" className="w-10 h-10" />
              <img src=	"https://ecomusnext-themesflat.vercel.app/images/payments/img-3.png" alt="Amex" className="w-10 h-10" />
              <img src="	https://ecomusnext-themesflat.vercel.app/images/payments/img-4.png" alt="Discover" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Item;
