import React from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { Link } from 'react-router-dom';
import ResumeTemp from "./ResumeTemp";
import TemplatePreview from "./TemplatePreview";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import Upload from "./pages/Upload";
import Contacts from "./pages/Contacts";
import Builder from "./pages/Builder";
import About from "./pages/About";
import AuthForm from ".pages/AuthForm";

import CreateResume from "./pages/CreateResume";
import ImproveResume from "./pages/ImproveResume";



function App() {

  return (
    
    <Router>
      <div className="min-h-screen bg-gray-200 p-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-sideleft mb-8 text-gray-800">
          Resume Builder SA
        </h1>

        {/* Navigation Bar */}
        <nav className="flex justify-center space-x-8 mb-12 text-lg text-blue-600">
          <Link to="/" className="hover:underline">Home</Link>

          <Link to="/authform" className="hover:underline">Login / Sign in</Link>
          {/* <Link to="/login" className="hover:underline">Login</Link> */}
          <Link to="/builder" className="hover:underline">Builder</Link>
          <Link to="/upload" className="hover:underline">Upload</Link>
          <Link to="/contacts" className="hover:underline">Contacts</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </nav>

        {/* Action Cards (appear only on Home page) */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="flex flex-col md:flex-row gap-20 max-w-5xl mx-auto mb-12">
                  {/* First Card - Create Resume */}
                  <Link
                    to="/create"
                    className="flex-1 bg-white rounded-lg shadow p-8 cursor-pointer hover:underline"
                  >
                    <h3 className="text-red-900 mt-5 text-base font-medium tracking-tight">
                      Create New Resume/CV
                    </h3>
                    <p className="text-gray-500 mt-2">
                      Start from scratch using our builder.
                    </p>
                  </Link>

                  {/* Second Card - Improve Resume */}
                  <Link
                    to="/improve"
                    className="flex-1 bg-white rounded-lg shadow p-8 cursor-pointer hover:underline"
                  >
                    <h3 className="text-green-900 dark:text-black mt-5 text-base font-medium tracking-tight">
                      Improve Your Resume/CV
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      Upload your resume and get suggestions.
                    </p>
                  </Link>
                </div>

                {/* Render Home content */}
                <Home />
              </>
            }
          />

          {/* Route Pages */}
          <Route path="/create" element={<CreateResume />} />
          <Route path="/improve" element={<ImproveResume />} />

          <Route path="/authform" element={<AuthForm />} />
          {/* <Route path="/login" element={<Login />} />  */}
          <Route path="/builder" element={<Builder />} />
          <Route path="/upload" element={<Upload />} />
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
