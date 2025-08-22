import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

const App = () => {
  return (
    <Router>
      {/* ✅ Navbar */}
      <nav className="bg-indigo-600 p-4 text-white flex justify-between">
        <h1 className="font-bold text-lg">🍲 Recipe App</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/add-recipe" className="hover:underline">
            Add Recipe
          </Link>
        </div>
      </nav>

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
};

export default App;
