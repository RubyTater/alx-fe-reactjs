import { useRecipeStore } from './recipeStore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearchTerm(search);
  }, [search, setSearchTerm]);


    return (
      <div>
        <h2>Ruby's Recipe</h2>
        <SearchBar />

        {filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };

  export default RecipeList;