import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import AuthForm from "./pages/AuthForm";
import StudentDash from "./pages/StudentDash";
import MembersList from "./pages/MembersList";
import BECDashboard from "./pages/BECDashboard";
import ProtectedRoute from "./components/ProtectedRoute"; // fixed spelling
import Events from "./Events";
import Announcement from "./pages/Announcement";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-200 p-6">
        {/* Fixed Header + Navigation Bar */}
        <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
          <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-800">natesa</h1>

            <div className="flex space-x-6 text-lg text-blue-600">
              <Link to="/" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Home</Link>
              <Link to="/authform" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Login</Link>
              <Link to="/contacts" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Contacts</Link>
              <Link to="/about" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">About</Link>
              {/* <Link to="/events" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Events</Link>
              <Link to="/announcement" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Announcement</Link> */}
            </div>
          </div>
        </nav>

        {/* Add spacing below the fixed nav */}
        <div className="pt-24">
          <Routes>
            {/* Home */}
            <Route
              path="/"
              element={
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Events Card */}
                    <Link
                      to="/events"
                      className="group bg-white rounded-2xl shadow-lg p-10 flex flex-col items-start justify-between transition transform hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-red-100 text-red-600 p-4 rounded-full">📅</div>
                        <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-red-700">
                          Events
                        </h3>
                      </div>
                      <p className="mt-6 text-gray-600 text-lg">
                        Stay updated with upcoming events this month and week.
                      </p>
                      <span className="mt-8 text-red-600 font-medium group-hover:underline">
                        View Events →
                      </span>
                    </Link>

                    {/* Announcements Card */}
                    <Link
                      to="/announcement"
                      className="group bg-white rounded-2xl shadow-lg p-10 flex flex-col items-start justify-between transition transform hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-green-100 text-green-600 p-4 rounded-full">📢</div>
                        <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-green-700">
                          Announcements
                        </h3>
                      </div>
                      <p className="mt-6 text-gray-600 text-lg">
                        Read the latest updates and important news.
                      </p>
                      <span className="mt-8 text-green-600 font-medium group-hover:underline">
                        View Announcements →
                      </span>
                    </Link>
                  </div>

                  {/* Render Home content */}
                  <Home />
                </div>
              }
            />

            {/* Other Pages */}
            <Route path="/authform" element={<AuthForm />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/studentdash" element={<StudentDash />} />
            <Route path="/bec-dashboard" element={<BECDashboard />} /> */}
            <Route path="/events" element={<Events />} />
            <Route path="/announcement" element={<Announcement />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/admin" element={<Admin />} /> */}

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="admin" element={<Admin />} />
              <Route path="bec-dashboard" element={<BECDashboard />} />
              <Route path="studentdash" element={<StudentDash />} />
            </Route>




            {/* Protected Route */}
            <Route
              path="/members"
              element={
                <ProtectedRoute allowedRoles={["admin", "moderator"]}>
                  <MembersList />
                </ProtectedRoute>
              }
            />

            {/* Redirect unknown routes */}
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<AuthForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
