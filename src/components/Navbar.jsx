import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/natesa-logo.png"; // Adjust path and filename as needed

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-blue-900 shadow-lg">
      <Link to="/" className="flex items-center space-x-3">
        <img
          src={logo}
          alt="Natesa Logo"
          className="h-10 w-10 rounded-full bg-white p-1 shadow"
        />
        <span className="font-extrabold text-2xl text-white tracking-wide">
          natesa
        </span>
      </Link>
      {/* Example nav items */}
      <div className="flex space-x-6">
        <Link
          to="/about"
          className="text-white font-medium hover:text-blue-200 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          to="/branches"
          className="text-white font-medium hover:text-blue-200 transition-colors duration-200"
        >
          Branches
        </Link>
        <Link
          to="/contact"
          className="text-white font-medium hover:text-blue-200 transition-colors duration-200"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;