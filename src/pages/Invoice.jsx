import React from "react";

const Invoice = () => {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg md:max-w-3xl lg:max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <img src="/logo.png" alt="Logo" className="h-8" />
          </div>
          <div className="text-right mt-4 md:mt-0">
            <h2 className="text-xl font-bold">Invoice #</h2>
            <p className="text-gray-600">0043128641</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mb-6">
          <div>
            <p className="font-semibold">Invoice date:</p>
            <p>03/10/2024</p>
          </div>
          <div>
            <p className="font-semibold">Due date:</p>
            <p>03/10/2024</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mb-6">
          <div>
            <p className="font-semibold">Supplier</p>
            <p>Jobio LLC</p>
            <p>2301 Ravenswood Rd Madison, WI 53711</p>
          </div>
          <div>
            <p className="font-semibold">Customer</p>
            <p className="font-bold">John Doe</p>
            <p>329 Queensberry Street, North Melbourne</p>
            <p>VIC 3051, Australia.</p>
          </div>
        </div>

        <div className="border rounded-lg overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-red-500">Description</th>
                <th className="p-3 text-red-500">Price</th>
                <th className="p-3 text-red-500">VAT (20%)</th>
                <th className="p-3 text-red-500">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Standard Plan</td>
                <td className="p-3">$443.00</td>
                <td className="p-3">$921.80</td>
                <td className="p-3">$9243</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Extra Plan</td>
                <td className="p-3">$413.00</td>
                <td className="p-3">$912.80</td>
                <td className="p-3">$5943</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-right text-lg font-bold mt-4">
          <p>Total Due: <span className="text-black">$9,750</span></p>
        </div>

        <div className="text-center mt-8 text-gray-600 text-sm">
          <p><a href="https://www.ecomus.com" className="text-red-500">www.ecomus.com</a> | invoice@ecomus.com | (123) 123-456</p>
        </div>

  
        <button 
  onClick={() => window.print()}
  className="mt-6 bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800 w-full md:w-auto"
>
  Print this invoice
</button>

      </div>
    </div>
  );
};

export default Invoice;
