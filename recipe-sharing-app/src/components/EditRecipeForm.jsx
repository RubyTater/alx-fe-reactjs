import {useRecipeStore} from './recipeStore';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const EditRecipeForm = () => {
    const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore();
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    const found = recipes.find(r => r.id === id);
    if (found) setFormData({ title: found.title, description: found.description });
    else navigate('/');
  }, [id, recipes, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(id, formData);
    navigate(`/recipe/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
      <textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditRecipeForm;