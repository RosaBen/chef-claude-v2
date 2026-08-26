// scripts
import { useEffect, useState } from "react";
import {
  getRecipe,
  getRecipeInstructions,
  getRandomRecipe,
} from "./assets/scripts/utils.js";

// styles
import "./assets/styles/index.css";

function App() {
  const [recipe, setRecipe] = useState(null);
  // const recipes = getRecipe(["apple", "flour"]);
  useEffect(() => {
    async function loadData() {
      try {
        const recipes = await getRecipe(["apple", "flour"]);
        console.log(recipes);
      } catch (error) {
        console.error(error);
      }
    }
    // getRecipeInstructions(640352);
    // setRecipe(recipes[getRandomRecipe(recipes)]);
    loadData();
  }, []);
  console.log(recipe);
  return <></>;
}

export default App;
