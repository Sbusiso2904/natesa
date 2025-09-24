import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Dashboard Top Nav */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-blue-900 tracking-wide">Natesa Dashboard</h1>
          <div className="flex space-x-6 text-lg text-blue-700 font-semibold">
            <Link to="admin" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Admin</Link>
            <Link to="bec-dashboard" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">BEC Dashboard</Link>
            <Link to="studentdash" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Student</Link>
            <Link to="branche" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Branche</Link>
            <Link to="events" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Events</Link>
            <Link to="announcement" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Announcement</Link>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="pt-24 max-w-7xl mx-auto px-6">
        {/* Nested routes will render here */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
