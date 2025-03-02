import React, { useState } from "react";
import { ChevronRight, Grid, ShoppingBag, Package, List, Settings } from "lucide-react";
import ProductMenu from "./ProductMenu";
import LoginReg from "../pages/LoginReg";
import CartPage from "../pages/CartPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Forgot from "../pages/Forgot";
import Testimonials from "./Testimonals";
import Footer from "./Footer";
import ProductPage from "../Products/ProductPage";
import ShopByCategories from "./ShopByCategories";
import Categories from "./Categories";
import NewArrivals from "../pages/NewArrivals";
import FilterSidebar from "./filterbar/FilterSidebar";
import Integration from "../pages/Integration";
import AccountDashboard from "../pages/AccountDashboard";
import NotFoundPage from "../pages/NotFoundPage";
import InvoicePage from "../pages/Invoice";
import PaymentConfirmation from "../pages/payment/PaymentConfirmation";
import PaymentFailure from "../pages/payment/PaymentFailure";
import FAQPage from "../pages/FAQPage";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";

const AdminPanel = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "products":
        return <ProductMenu />; 
      case "dashboard":
        return <div className="p-6 text-gray-900">Welcome to the Dashboard!</div>;
      case "category":
        return <div className="p-6 text-gray-900">Manage your Categories here.</div>;
      case "orders":
        return <div className="p-6 text-gray-900">Track and manage Orders here.</div>;
      case "logout":
        return <div className="p-6 text-gray-900">You have logged out!</div>;
      default:
        return <div className="p-6 text-gray-900">Select an option from the sidebar.</div>;
    }
  };

  return (
    <>
    <div className="h-screen flex text-gray-600 text-grey">
      <div className="flex flex-col w-60">
        <div className="flex items-center p-4 border-b border-gray-800">
          <img
            src="https://techzaa.in/larkon/admin/assets/images/users/avatar-1.jpg" 
            alt="User Profile"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="ml-3 text-xl font-bold">John</h1>
        </div>

        <div className="flex-grow p-4">
          <h2 className="text-gray-500 text-sm mb-4">GENERAL</h2>
          <ul className="space-y-2">
            <li
              className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
                activePage === "dashboard" ? "" : ""
              }`}
              onClick={() => setActivePage("dashboard")}
            >
              <Grid className="w-5 h-5 text-gray-400" />
              <span>Dashboard</span>
            </li>
            <li
              className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
                activePage === "products" ? "" : ""
              }`}
              onClick={() => setActivePage("products")}
            >
              <Package className="w-5 h-5 " />
              <span >Products</span>
              <ChevronRight className="ml-auto text-gray-500 w-4 h-4" />
            </li>
            <li
              className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
                activePage === "category" ? "" : ""
              }`}
              onClick={() => setActivePage("category")}
            >
              <List className="w-5 h-5 text-gray-400" />
              <span>Category</span>
              <ChevronRight className="ml-auto text-gray-500 w-4 h-4" />
            </li>
            <li
              className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
                activePage === "orders" ? "" : ""
              }`}
              onClick={() => setActivePage("orders")}
            >
              <ShoppingBag className="w-5 h-5 text-gray-400" />
              <span>Orders</span>
              <ChevronRight className="ml-auto text-gray-500 w-4 h-4" />
            </li>
            <li
              className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
                activePage === "logout" ? "" : ""
              }`}
              onClick={() => setActivePage("logout")}
            >
              <Settings className="w-5 h-5 text-gray-400" />
              <span>Logout</span>
              <ChevronRight className="ml-auto text-gray-500 w-4 h-4" />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 bg-gray-50">{renderContent()}</div>
    
    </div>
    <LoginReg/>
    <CartPage/>
    <Login/>
    <Register/>
    <Forgot/>
    <Testimonials/>
    <Footer/>
    <ProductPage/>
    <ShopByCategories/>
    <Categories/>
    <NewArrivals/>
<FilterSidebar/>
<Integration/>
 <AccountDashboard/>
 <NotFoundPage/>
 <InvoicePage/>
 <PaymentConfirmation/>
 <PaymentFailure/>
 <FAQPage/>
 <ContactUs/>
<AboutUs/>
{/* <Sidebar/> */}
    </>
  );
};

export default AdminPanel;
