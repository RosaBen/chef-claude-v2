import { useEffect, useState } from "react";
import Form from "../components/Form";
import Ingredients from "../components/Ingredients";
import RecipeTest from "../components/RecipeTest";
import { recipeMd } from "../assets/scripts/api";
// import generateRecipe from "../assets/scripts/ai.js";

export default function Home({ ingredients }) {
  const [newIngr, setNewIngr] = useState(ingredients);
  const [showRecipe, setShowRecipe] = useState(false);

  // async function getRecipe() {
  //   const recipeGenerated = await generateRecipe(newIngr);
  //   console.log(recipeGenerated);
  // }

  function getRecipe() {
    return <section>{recipeMd}</section>;
  }
  return (
    <main>
      <Form ingredients={ingredients} set={setNewIngr} />
      {newIngr.length ? (
        <>
          <section className="list-ingredients">
            <h2>Ingredients on hand:</h2>
            <Ingredients newArray={newIngr} />
          </section>
          {newIngr.length > 1 && (
            <section className="get-recipe">
              <h2>Ready for a recipe?</h2>
              <p>Generate a recipe from your list of ingredients.</p>
              <button onClick={() => setShowRecipe((prev) => !prev)}>
                Get a recipe
              </button>
            </section>
          )}
        </>
      ) : null}
      {showRecipe && getRecipe()}
    </main>
  );
}
