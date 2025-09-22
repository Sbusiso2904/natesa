import React from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import AuthForm from "./pages/AuthForm";


function App() {

  return (
    <Router>
      <div className="min-h-screen bg-gray-200 p-6">
    
          {/* Fixed Header + Navigation Bar */}
          <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
              
              {/* Logo or Header */}
              <h1 className="text-2xl font-bold text-gray-800">
                natesa
              </h1>

              {/* Navigation Links */}
              <div className="flex space-x-6 text-lg text-blue-600">
                <Link to="/" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Home</Link>
                <Link to="/authform" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Login</Link>
                <Link to="/contacts" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Contacts</Link>
                <Link to="/about" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">About</Link>
              </div>
            </div>
          </nav> 
          

          {/* Add spacing below the fixed nav */}
          <div className="pt-24">
            {/* Your page content here */}
          </div>

        {/* Action Cards (appear only on Home page) */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="flex flex-col md:flex-row gap-20 max-w-5xl mx-auto mb-12">
                  {/* First Card - Create Resume */}

                </div>

                {/* Render Home content */}
                <Home />
              </>
            }
          />

          {/* Route Pages */}

          <Route path="/authform" element={<AuthForm />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />

          {/* 404 Page */}
          <Route path="*" element={<h1 className="text-center text-red-600 text-2xl">404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
    
  );
}
export default App;
