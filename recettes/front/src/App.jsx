import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import RecipeForm from "./pages/RecipeForm";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recette/:id" element={<Recipe />} />
        <Route path="/recette" element={<RecipeForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
