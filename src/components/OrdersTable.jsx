import React, { useState } from "react";
import OrderTracking from "./OrderTracking";

export default function OrdersTable() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    { id: "#123", date: "August 1, 2024", status: "On hold", total: "$200.0 for 1 item" },
    { id: "#345", date: "August 2, 2024", status: "On hold", total: "$300.0 for 1 item" },
    { id: "#567", date: "August 3, 2024", status: "On hold", total: "$400.0 for 1 item" },
  ];

  const handleViewClick = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="overflow-x-auto pl-5">
      {selectedOrder ? (
        <OrderTracking order={selectedOrder} />
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left text-sm sm:text-base">Order</th>
              <th className="border p-3 text-left text-sm sm:text-base">Date</th>
              <th className="border p-3 text-left text-sm sm:text-base">Status</th>
              <th className="border p-3 text-left text-sm sm:text-base">Total</th>
              <th className="border p-3 text-left text-sm sm:text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border">
                <td className="p-3 border text-sm sm:text-base">{order.id}</td>
                <td className="p-3 border text-sm sm:text-base">{order.date}</td>
                <td className="p-3 border text-sm sm:text-base">{order.status}</td>
                <td className="p-3 border text-sm sm:text-base">{order.total}</td>
                <td className="p-3 border text-sm sm:text-base">
                  <button
                    className="bg-black text-white px-4 py-2 rounded-sm text-xs sm:text-base"
                    onClick={() => handleViewClick(order)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
