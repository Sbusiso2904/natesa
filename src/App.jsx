// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

// // import Home from "./pages/Home";
// // import Contacts from "./pages/Contacts";
// // import About from "./pages/About";
// // import AuthForm from "./pages/AuthForm";
// // import BranchePage from "./pages/Branche";

// // import StudentDash from "./pages/StudentDash";
// // import MembersList from "./pages/MembersList";
// // import BECDashboard from "./pages/BECDashboard";
// // import ProtectedRoute from "./components/ProtectedRoute";
// // import Events from "./pages/Events";
// // import Announcement from "./pages/Announcement";
// // import Dashboard from "./pages/Dashboard";
// // import Admin from "./pages/Admin";

// // function App() {
// //   return (
// //     <Router>
// //       <div className="min-h-screen bg-gray-200">
// //         {/* Fixed Header + Navigation Bar (only for public pages) */}
// //         <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
// //           <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
// //             <h1 className="text-2xl font-bold text-gray-800">natesa</h1>

// //             {/* Navigation Links */}
// //             <div className="flex space-x-6 text-lg text-blue-600">
// //               <Link to="/" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Home</Link>
// //               <Link to="/authform" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Login</Link>
// //               <Link to="/contacts" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Contacts</Link>
// //               <Link to="/about" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">About</Link>
// //               {/* <Link to="/branches" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Branches</Link> */}
// //             </div>
// //           </div>
// //         </nav>

// //         {/* Add spacing below the fixed nav */}
// //         <div className="pt-24">
// //           <Routes>
// //             {/* Home Page */}
// //             <Route
// //               path="/"
// //               element={
// //                 <div className="max-w-6xl mx-auto">
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
// //                     {/* Events Card */}
// //                     <Link
// //                       to="/events"
// //                       className="group bg-white rounded-2xl shadow-lg p-10 flex flex-col items-start justify-between transition transform hover:-translate-y-2 hover:shadow-2xl"
// //                     >
// //                       <div className="flex items-center gap-4">
// //                         <div className="bg-red-100 text-red-600 p-4 rounded-full">📅</div>
// //                         <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-red-700">
// //                           Events
// //                         </h3>
// //                       </div>
// //                       <p className="mt-6 text-gray-600 text-lg">
// //                         Stay updated with upcoming events this month and week.
// //                       </p>
// //                       <span className="mt-8 text-red-600 font-medium group-hover:underline">
// //                         View Events →
// //                       </span>
// //                     </Link>

// //                     {/* Announcements Card */}
// //                     <Link
// //                       to="/announcement"
// //                       className="group bg-white rounded-2xl shadow-lg p-10 flex flex-col items-start justify-between transition transform hover:-translate-y-2 hover:shadow-2xl"
// //                     >
// //                       <div className="flex items-center gap-4">
// //                         <div className="bg-green-100 text-green-600 p-4 rounded-full">📢</div>
// //                         <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-green-700">
// //                           Announcements
// //                         </h3>
// //                       </div>
// //                       <p className="mt-6 text-gray-600 text-lg">
// //                         Read the latest updates and important news.
// //                       </p>
// //                       <span className="mt-8 text-green-600 font-medium group-hover:underline">
// //                         View Announcements →
// //                       </span>
// //                     </Link>
// //                   </div>

// //                   {/* Render Home content */}
// //                   <Home />
// //                 </div>
// //               }
// //             />

// //             {/* Public Pages */}
// //             <Route path="/authform" element={<AuthForm />} />
// //             <Route path="/contacts" element={<Contacts />} />
// //             <Route path="/about" element={<About />} />
// //             {/* <Route path="/branches" element={<BranchePage />} />
// //             <Route path="/events" element={<Events />} />
// //             <Route path="/announcement" element={<Announcement />} /> */}

// //             {/* Dashboard  */}
// //             <Route path="/dashboard" element={<Dashboard />}>
// //               <Route index element={<Navigate to="studentdash" replace />} />
// //               <Route path="admin" element={<Admin />} />
// //               <Route path="bec-dashboard" element={<BECDashboard />} />
// //               <Route path="studentdash" element={<StudentDash />} />
// //               <Route path="/branches" element={<BranchePage />} />
// //                <Route index element={<Navigate to="branches" />} />
// //               <Route path="/events" element={<Events />} />
// //               <Route path="/announcement" element={<Announcement />} />
            
// //             </Route>

// //             {/* Protected Route */}
// //             <Route
// //               path="/members"
// //               element={
// //                 <ProtectedRoute allowedRoles={["admin", "moderator"]}>
// //                   <MembersList />
// //                 </ProtectedRoute>
// //               }
// //             />

// //           <Route path="*" element={<Navigate to="/" />} />
      

// //             {/* 404 Page */}
// //             <Route path="*" element={<h1 className="text-center text-red-600 text-2xl">404 - Page Not Found</h1>} />
// //           </Routes>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;


// // i











// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

// import Home from "./pages/Home";
// import Contacts from "./pages/Contacts";
// import About from "./pages/About";
// import AuthForm from "./pages/AuthForm";
// import BranchePage from "./pages/Branche";
// import StudentDash from "./pages/StudentDash";
// import MembersList from "./pages/MembersList";
// import BECDashboard from "./pages/BECDashboard";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Events from "./pages/Events";
// import Announcement from "./pages/Announcement";
// import Dashboard from "./pages/Dashboard";
// import Admin from "./pages/Admin";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-200">
//         {/* Fixed Header + Navigation Bar */}
//         <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
//           <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
//             <h1 className="text-2xl font-bold text-gray-800">natesa</h1>
//             <div className="flex space-x-6 text-lg text-blue-600">
//               <Link to="/" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Home</Link>
//               <Link to="/authform" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Login</Link>
//               <Link to="/contacts" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Contacts</Link>
//               <Link to="/about" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">About</Link>
//             </div>
//           </div>
//         </nav>

//         {/* Page Content */}
//         <div className="pt-24">
//           <Routes>
//             {/* Home Page */}
//             <Route
//               path="/"
//               element={
//                 <div className="max-w-6xl mx-auto">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//                     <Link
//                       to="/dashboard/events"
//                       className="group bg-white rounded-2xl shadow-lg p-10 flex flex-col items-start justify-between transition transform hover:-translate-y-2 hover:shadow-2xl"
//                     >
//                       <div className="flex items-center gap-4">
//                         <div className="bg-red-100 text-red-600 p-4 rounded-full">📅</div>
//                         <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-red-700">Events</h3>
//                       </div>
//                       <p className="mt-6 text-gray-600 text-lg">Stay updated with upcoming events this month and week.</p>
//                       <span className="mt-8 text-red-600 font-medium group-hover:underline">View Events →</span>
//                     </Link>

//                     <Link
//                       to="/dashboard/announcement"
//                       className="group bg-white rounded-2xl shadow-lg p-10 flex flex-col items-start justify-between transition transform hover:-translate-y-2 hover:shadow-2xl"
//                     >
//                       <div className="flex items-center gap-4">
//                         <div className="bg-green-100 text-green-600 p-4 rounded-full">📢</div>
//                         <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-green-700">Announcements</h3>
//                       </div>
//                       <p className="mt-6 text-gray-600 text-lg">Read the latest updates and important news.</p>
//                       <span className="mt-8 text-green-600 font-medium group-hover:underline">View Announcements →</span>
//                     </Link>
//                   </div>

//                   {/* Home content */}
//                   <Home />
//                 </div>
//               }
//             />

//             {/* Public Pages */}
//             <Route path="/authform" element={<AuthForm />} />
//             <Route path="/contacts" element={<Contacts />} />
//             <Route path="/about" element={<About />} />

//             {/* Dashboard with nested routes */}
//             <Route path="/dashboard" element={<Dashboard />}>
//               {/* Default child route */}
//               <Route index element={<Navigate to="branches" replace />} />
//               <Route path="branches" element={<BranchePage />} />
//               <Route path="events" element={<Events />} />
//               <Route path="announcement" element={<Announcement />} />
//               <Route path="studentdash" element={<StudentDash />} />
//               <Route path="bec-dashboard" element={<BECDashboard />} />
//               <Route path="admin" element={<Admin />} />
//             </Route>

//             {/* Protected route example */}
//             <Route
//               path="/members"
//               element={
//                 <ProtectedRoute allowedRoles={["admin", "moderator"]}>
//                   <MembersList />
//                 </ProtectedRoute>
//               }
//             />

//             {/* 404 fallback */}
//             <Route path="*" element={<h1 className="text-center text-red-600 text-2xl">404 - Page Not Found</h1>} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import AuthForm from "./pages/AuthForm";
import BranchePage from "./pages/Branche";
import StudentDash from "./pages/StudentDash";
import MembersList from "./pages/MembersList";
import BECDashboard from "./pages/BECDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Events from "./pages/Events";
import Announcement from "./pages/Announcement";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-200">
        {/* Fixed Header + Navigation Bar */}
        <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
          <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-800">natesa</h1>
            <div className="flex space-x-6 text-lg text-blue-600">
              <Link to="/" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Home</Link>
              <Link to="/authform" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Login</Link>
              <Link to="/contacts" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Contacts</Link>
              <Link to="/about" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">About</Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="pt-24">
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/authform" element={<AuthForm />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />

            {/* Dashboard with nested routes */}
            <Route path="/dashboard" element={<Dashboard />}>
              {/* Default child route */}
              <Route index element={<Navigate to="branches" replace />} />
              <Route path="branches" element={<BranchePage />} />
              <Route path="events" element={<Events />} />
              <Route path="announcement" element={<Announcement />} />
              <Route path="studentdash" element={<StudentDash />} />
              <Route path="bec-dashboard" element={<BECDashboard />} />
              <Route path="admin" element={<Admin />} />
            </Route>

            {/* Protected route example */}
            <Route
              path="/members"
              element={
                <ProtectedRoute allowedRoles={["admin", "moderator"]}>
                  <MembersList />
                </ProtectedRoute>
              }
            />

            {/* 404 fallback */}
            <Route path="*" element={<h1 className="text-center text-red-600 text-2xl">404 - Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
