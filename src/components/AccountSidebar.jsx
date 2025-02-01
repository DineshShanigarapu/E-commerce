import React from "react";

export default function AccountSidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "orders", label: "Orders" },
    { id: "addresses", label: "Addresses" },
    { id: "account", label: "Account Details" },
    { id: "wishlist", label: "Wishlist" },
    { id: "logout", label: "Logout" },
  ];

  return (
    <div className="w-full md:w-1/4 ">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`w-full text-left px-4 py-3 text-lg border mb-3 d transition-all ${
            activeTab === item.id ? "bg-gray-100 text-red-500" : "hover:bg-gray-100"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
