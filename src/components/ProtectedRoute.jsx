import { Navigate } from "react-router-dom";
import React from "react";

export default function ProtectedRoute({ children, allowedRoles }) {
  const email = localStorage.getItem("loggedInUser");
  const user = JSON.parse(localStorage.getItem(email));

  if (!user || !allowedRoles.includes(user.category)) {
    return <Navigate to="/authform" replace />;
  }

  return children;
}