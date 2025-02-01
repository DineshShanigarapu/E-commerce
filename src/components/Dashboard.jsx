import React from "react";
import OrdersTable from "./OrdersTable";
import AddressManager from "./AddressManager";
import AccountDetails from "./AccountDetails";
import ProductList from "./ProductList";

export default function DashboardContent({ activeTab }) {
  const contentData = {
    dashboard: "From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.",
    addresses: "Manage your shipping and billing addresses here.",
    account: "Update your account details and password here.",
    wishlist: "View and manage your wishlist items here.",
    logout: "You have successfully logged out.",
  };

  return (
    <div className="w-full md:w-3/4 ">
      {activeTab === "orders" ? (
        <OrdersTable />
      ) : activeTab === "addresses" ? (
        <AddressManager />
      ) : activeTab === "account" ? (
        <AccountDetails /> ) : activeTab === "wishlist" ? ( <ProductList />) : ( 
        <p className="text-lg text-gray-700">{contentData[activeTab]}</p>
      )}
    </div>
  );
}
