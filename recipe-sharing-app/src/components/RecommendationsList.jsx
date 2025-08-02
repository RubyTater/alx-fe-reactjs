import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function RecommendationsList() {
  const recipes = useRecipeStore((state) => state.recipes);

  // Choose the first 3 recipes as "recommended"
  const recommended = recipes.slice(0, 3);

  return (
    <div style={{ marginTop: '30px' }}>
      <h3>Recommended Recipes</h3>
      {recommended.length > 0 ? (
        <ul>
          {recommended.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations yet.</p>
      )}
    </div>
  );
}

export default RecommendationsList;
