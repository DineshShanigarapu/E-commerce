import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const OrderTracking = () => {
  const [orderDetails, setOrderDetails] = useState({
    orderId: '17493',
    status: 'IN PROGRESS',
    item: 'Fashion',
    courier: 'Ribbed modal T-shirt',
    startTime: '04 September 2024, 13:30:23',
    address: '1234 Fashion Street, Suite 567, New York',
    trackingInfo: [
      {
        stage: 'Product Shipped',
        date: '10/07/2024 4:30pm',
        details: [
          'Courier Service: FedEx World Service Center',
          'Estimated Delivery Date: 12/07/2024'
        ]
      },
      {
        stage: 'Product Shipped',
        date: '10/07/2024 4:30pm',
        details: [
          'Tracking Number: 2307-3215-6759',
          'Warehouse: T-Shirt 10b'
        ]
      },
      {
        stage: 'Product Packaging',
        date: '12/07/2024 4:34pm',
        details: []
      },
      {
        stage: 'Order Placed',
        date: '11/07/2024 2:36pm',
        details: []
      }
    ],
    receiver: {
      name: 'John Doe',
      phone: '123-456-7890'
    }
  });

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img src="	https://ecomusnext-themesflat.vercel.app/images/products/brown.jpg" alt="product" className="w-48 h-48 object-cover" />
        </div>
        <div className="p-8">
          <div className="tracking-wide text-sm text-indigo-500 font-semibold">{orderDetails.status}</div>
          <h1 className="text-xl font-bold">Order #{orderDetails.orderId}</h1>
          <p className="mt-2 text-gray-500">Item: {orderDetails.item}</p>
          <p className="mt-2 text-gray-500">Courier: {orderDetails.courier}</p>
          <p className="mt-2 text-gray-500">Start Time: {orderDetails.startTime}</p>
          <p className="mt-2 text-gray-500">Address: {orderDetails.address}</p>
          <p className="mt-2 text-gray-500">Receiver: {orderDetails.receiver.name} ({orderDetails.receiver.phone})</p>
        </div>
      </div>
      <div className="mt-4">
        <ul className="divide-y divide-gray-200">
          {orderDetails.trackingInfo.map((info, index) => (
            <li key={index} className="py-4">
              <div className="flex justify-between">
                <div className="text-gray-900 font-medium">{info.stage}</div>
                <div className="text-gray-500">{info.date}</div>
              </div>
              {info.details.map((detail, idx) => (
                <div key={idx} className="text-gray-500">{detail}</div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderTracking;
