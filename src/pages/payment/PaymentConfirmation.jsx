import React from 'react';

const PaymentConfirmation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-200 p-6 sm:p-8 md:p-10 lg:p-12 rounded-sm w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl  mb-4 sm:mb-6">Payment Confirmation</h2>
        <div className="space-y-2 sm:space-y-4">
          <div className="flex justify-between">
            <span>Date</span>
            <span>01/01/2024</span>
          </div>
          <div className="flex justify-between">
            <span>Payment method</span>
            <span>Visa</span>
          </div>
          <div className="flex justify-between">
            <span>Card number</span>
            <span>**** **** **** 9999</span>
          </div>
          <div className="flex justify-between">
            <span>Cardholder name</span>
            <span>Themesflat</span>
          </div>
          <div className="flex justify-between">
            <span>Email</span>
            <span>info@fashionshop.com</span>
          </div>
          <div className="flex justify-between">
            <span>Phone</span>
            <span>(212) 555-1234</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Subtotal</span>
            <span>$188.00 USD</span>
          </div>
        </div>
        <div className="mt-4 sm:mt-6 flex justify-between">
          <button className="bg-white text-black border border-black px-4 py-2 sm:px-4 sm:py-2 rounded-sm">Cancel Payment</button>
          <button className="bg-black text-white px-3 py-2 sm:px-4 sm:py-2 rounded-sm">Confirm Payment</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
