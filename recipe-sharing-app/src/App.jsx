import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          {/* <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
