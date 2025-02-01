import React, { useState } from "react";
import AccountSidebar from "../components/AccountSidebar";
import DashboardContent from "../components/Dashboard";


export default function AccountDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6">
      <AccountSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <DashboardContent activeTab={activeTab} />
    </div>
  );
}
