import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // this is used to delete recipe
  const handleDeleteRecipe = (indexToDelete) => {
    setRecipes(recipes.filter((recipe, index) => index !== indexToDelete));
  };

  // this is used to create new recipe
  const handleCreateRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} handleDeleteRecipe={handleDeleteRecipe} />
      <RecipeCreate handleCreateRecipe={handleCreateRecipe} />
    </div>
  );
}

export default App;
