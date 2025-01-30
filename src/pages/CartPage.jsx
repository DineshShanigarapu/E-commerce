import { useState } from "react";
import CheckoutPage from "../components/CheckoutPage";
import Note from "../components/Note";

export default function CartPage() {
  const [cart, setCart] = useState([
    { id: 1, name: "Case with MagSafe", price: 19.99, quantity: 1, image: "https://ecomusnext-themesflat.vercel.app/images/products/bark-phone-blue.jpg" },
    { id: 2, name: "Oversized Printed T-shirt", price: 10.00, quantity: 1, image: "https://ecomusnext-themesflat.vercel.app/images/products/white-3.jpg" },
    { id: 3, name: "Regular Fit Oxford Shirt", price: 10.00, quantity: 1, image: "https://ecomusnext-themesflat.vercel.app/images/products/black-4.jpg" },
    { id: 4, name: "Denim Jacket", price: 35.00, quantity: 1, image: "https://ecomusnext-themesflat.vercel.app/images/products/light-green-1.jpg" },
    { id: 5, name: "Leather Wallet", price: 25.00, quantity: 1, image: "https://ecomusnext-themesflat.vercel.app/images/products/brown-3.jpg" },
  ]);

  const updateQuantity = (id, change) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <>
      <div className="flex flex-col lg:flex-row p-6 gap-6 overflow-hidden">
        {/* Left: Product List with Hidden Scrollbar */}
        <div className="flex-1 max-h-[500px] overflow-y-scroll scrollbar-hide rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          {cart.length > 0 ? cart.map((product) => (
            <div key={product.id} className="flex items-center justify-between border-b pb-4 mb-4 flex-wrap">
              <img src={product.image} alt={product.name} className="w-20 h-25 lg:w-20 lg:h-25 rounded" />
              <div className="flex-1 ml-4">
                <p className="font-semibold text-sm lg:text-base">{product.name}</p>
                <p className="text-gray-500 text-xs lg:text-sm">$ {product.price.toFixed(2)}</p>
                <button onClick={() => removeItem(product.id)} className="text-black underline text-xs lg:text-sm">Remove</button>
              </div>
              <div className="flex items-center mt-2 lg:mt-0">
                <button onClick={() => updateQuantity(product.id, -1)} className="border px-3 py-1 rounded bg-gray-200 text-xs lg:text-sm">-</button>
                <span className="px-4 text-xs lg:text-base">{product.quantity}</span>
                <button onClick={() => updateQuantity(product.id, 1)} className="border px-3 py-1 rounded bg-gray-200 text-xs lg:text-sm">+</button>
              </div>
              <p className="font-bold text-xs lg:text-sm">$ {(product.price * product.quantity).toFixed(2)}</p>
            </div>
          )) : <p className="text-center text-gray-500">Your cart is empty</p>}
        </div>

        {/* Right: Fixed Summary Section */}
        <div className="lg:w-72 w-full">
          <CheckoutPage cart={cart} totalPrice={totalPrice} />
        </div>
      </div>

      {/* Order Note Section */}
      <div className="mt-4">
        <Note />
      </div>
    </>
  );
}
