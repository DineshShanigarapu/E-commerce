import React, { useState } from 'react';
import CheckoutPage from '../components/CheckoutPage';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Case with MagSafe',
      color: 'White',
      size: 'M',
      price: 19.99,
      quantity: 1,
      image: 'https://ecomusnext-themesflat.vercel.app/images/products/bark-phone-blue.jpg', // Replace with the actual image path
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleAddProduct = (newProduct) => {
    setCartItems((prevItems) => [...prevItems, newProduct]);
  };

  return (
    
    <div className="container mx-auto p-4">
    
      
      <div className="bg-white w-[68vw] border rounded-sm p-4">
        <div className="grid grid-cols-5 gap-4 mb-4">
          <div className="col-span-2 font-semibold">Product</div>
          <div className="font-semibold">Product Price</div>
          <div className="font-semibold">Quantity</div>
          <div className="font-semibold">Total</div>
        </div>
        
        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-5 gap-4 mb-4 items-center">
            <div className="flex items-center col-span-2">
              <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">{item.color} / {item.size}</p>
                <button
                  onClick={() => handleRemove(item.id)}
                  className=" underline mt-2 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
            <p className="text-lg">{`$${item.price.toFixed(2)}`}</p>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                className="px-2 py-1 bg-gray-200 rounded-l"
              >
                -
              </button>
              <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, 1)}
                className="px-2 py-1 bg-gray-200 rounded-r"
              >
                +
              </button>
            </div>
            <p className="text-lg font-semibold">
              {`$${(item.price * item.quantity).toFixed(2)}`}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 ">
        <h2 className="text-lg font-semibold mb-2">Add Order Note</h2>
        <textarea
          className=" w-[40vw] h-32 p-2 border rounded-sm"
          placeholder="How can we help you?"
        ></textarea>  
         <div ><CheckoutPage/></div>
      </div>
     
    </div>
    
  );
};

export default CartPage;
