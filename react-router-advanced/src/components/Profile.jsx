// src/components/Profile.jsx
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <nav className="space-x-4 mb-4">
        <Link to="details" className="text-blue-600">Details</Link>
        <Link to="settings" className="text-blue-600">Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
