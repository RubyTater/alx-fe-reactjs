
import React from "react";
import { Navigate } from "react-router-dom";

const useAuth = () => {
  return localStorage.getItem("auth") === "true"; // simple mock login check
};

const ProtectedRoute = ({ children }) => {
  if (!useAuth()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
