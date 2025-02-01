import React from 'react';

const CheckoutPage = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-100 shadow-md rounded-ms p-6 ">
      <h2 className="text-xl font-semibold mb-4">Estimate Shipping</h2>
      <div className="mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Do you want a gift wrap? Only <span className="font-semibold">$5.00</span></span>
        </label>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Subtotal</span>
          <span className="text-lg font-semibold">$19.99 USD</span>
        </div>
        <p className="text-sm text-gray-600">Taxes and <span className="underline">shipping</span> calculated at checkout</p>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">I agree with the <span className="underline">terms and conditions</span></span>
        </label>
      </div>
      <button className="w-full bg-black text-white py-2 rounded-sm">Check out</button>
      <div className="mt-4 text-center">
        <p className="text-sm font-semibold">Guarantee Safe Checkout</p>
        <div className="flex justify-center mt-2 space-x-2">
        <img className="h-6" src="https://ecomus.magentech.com/media/wysiwyg/payments/visa.svg" />
            <img className="h-6" src="https://ecomus.magentech.com/media/wysiwyg/payments/paypal.svg" />
            <img className="h-6" src="https://ecomus.magentech.com/media/wysiwyg/payments/master.svg" />
            <img className="h-6" src="	https://ecomusnext-themesflat.vercel.app/images/payments/img-3.png" />
            <img className="h-6" src="https://ecomus.magentech.com/media/wysiwyg/payments/diners_club.svg" />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
