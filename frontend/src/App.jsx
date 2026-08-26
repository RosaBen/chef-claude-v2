// React
import { useEffect, useState } from "react";

// scripts
import {
  getRecipe,
  getRecipeInstructions,
  ingredients,
  instructions,
  recipe,
} from "./assets/scripts/utils.js";

// pages
import Home from "./pages/Home.jsx";

// components
import Header from "./components/Header.jsx";

// styles
import "./assets/styles/index.css";
import "./assets/styles/home.css";
import "./assets/styles/responsive.css";

function App() {
  // const [recipe, setRecipe] = useState(null);
  // useEffect(() => {
  //   // async function loadData() {
  //   //   try {
  //   //     const randomRecipe = await getRecipe(ingredients);
  //   //     console.log(randomRecipe);
  //   //     // setRecipe(randomRecipe.id);
  //   //     // console.log(recipe);
  //   //   } catch (error) {
  //   //     console.error(error);
  //   //   }
  //   // }
  //   // getRecipeInstructions(640352);
  //   // setRecipe(recipes[getRandomRecipe(recipes)]);
  //   // loadData();
  // }, []);

  return (
    <>
      <div className="container">
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
