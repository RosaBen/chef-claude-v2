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
  return (
    <>
      <div className="container">
        <Header />
        <Home ingredients={ingredients} />
      </div>
    </>
  );
}

export default App;
