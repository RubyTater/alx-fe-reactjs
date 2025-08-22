// src/components/RegistrationForm.jsx
import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(""); // ✅ use setErrors

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ explicit validation checks
    if (!username) {
      setErrors("⚠️ Username is required!");
      return;
    }
    if (!email) {
      setErrors("⚠️ Email is required!");
      return;
    }
    if (!password) {
      setErrors("⚠️ Password is required!");
      return;
    }

    setErrors("");
    window.alert(`✅ Registered!
    Username: ${username}
    Email: ${email}`);

    // Reset fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">📝 Register</h2>

      {errors && <p className="text-red-500 mb-3">{errors}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
