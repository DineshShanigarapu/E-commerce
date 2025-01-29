import React from 'react';

const Item = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2">
            <img src='	https://ecomusnext-themesflat.vercel.app/images/item/compare.svg'/>
            <span>Compare color</span>
          </button>
          <button className="flex items-center space-x-2">
            <span className="icon-ask-question"></span>
            <span>Ask a question</span>
          </button>
          <button className="flex items-center space-x-2">
            <span className="icon-delivery-return"></span>
            <span>Delivery & Return</span>
          </button>
          <button className="flex items-center space-x-2">
            <span className="icon-share"></span>
            <span>Share</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="p-6 border rounded-lg text-center">
          <div className="icon-delivery mb-4"></div>
          <p>Estimated delivery times: <strong>12-26 days</strong> (International), <strong>3-6 days</strong> (United States).</p>
        </div>
        <div className="p-6 border rounded-lg text-center">
          <div className="icon-return mb-4"></div>
          <p>Return within <strong>30 days</strong> of purchase. Duties & taxes are non-refundable.</p>
        </div>
      </div>
      <div className="text-center mb-6">
        <p className="mb-4">Guarantee Safe Checkout</p>
        <div className="flex justify-center space-x-4">
          <span className="icon-visa"></span>
          <span className="icon-paypal"></span>
          <span className="icon-mastercard"></span>
          <span className="icon-amex"></span>
          <span className="icon-discover"></span>
        </div>
      </div>
    </div>
  );
};

export default Item;
