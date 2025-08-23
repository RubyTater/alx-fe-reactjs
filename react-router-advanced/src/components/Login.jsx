// src/components/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/profile/details");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
