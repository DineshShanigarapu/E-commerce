import React from 'react';
import ReactDOM from 'react-dom';

const Invoice = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Invoice</h1>
            <p className="text-gray-600">Ecomus</p>
          </div>
          <div>
            <button className="bg-black text-white px-4 py-2 rounded">Print this invoice</button>
          </div>
        </div>
        <div className="flex justify-between mb-8">
          <div>
            <p className="text-sm">Invoice Date:</p>
            <p className="text-lg font-bold">03/10/2024</p>
          </div>
          <div>
            <p className="text-sm">Due Date:</p>
            <p className="text-lg font-bold">03/10/2024</p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-bold">Supplier Info:</h2>
          <p>Jobio LLC</p>
          <p>2301 Ravenswood Rd</p>
          <p>Madison, WI 53711</p>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-bold">Customer Info:</h2>
          <p>John Doe</p>
          <p>329 Queensberry Street</p>
          <p>North Melbourne VIC 3051</p>
          <p>Australia</p>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-bold">Item List:</h2>
          <ul>
            <li className="flex justify-between">
              <span>Standard Plan</span>
              <span>$5,000</span>
            </li>
            <li className="flex justify-between">
              <span>Extra Plan</span>
              <span>$4,500</span>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <p>VAT (20%): $250</p>
          <p className="font-bold">Total Due: $9,750</p>
        </div>
        <div className="text-center mt-8">
          <p>Contact Information:</p>
          <p>www.ecomus.com</p>
          <p>invoice@ecomus.com</p>
          <p>(123) 123-456</p>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Invoice />, document.getElementById('root'));
