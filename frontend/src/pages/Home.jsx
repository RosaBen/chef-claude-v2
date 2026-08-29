import { useEffect, useState } from "react";
import Form from "../components/Form";
import Ingredients from "../components/Ingredients";
import RecipeTest from "../components/RecipeTest";
import { recipeMd } from "../assets/scripts/api";
import ReactMarkdown from "react-markdown";
// import generateRecipe from "../assets/scripts/ai.js"; TOKEEP

export default function Home({ ingredients }) {
  const [newIngr, setNewIngr] = useState(ingredients);
  const [showRecipe, setShowRecipe] = useState(false);

  // TO KEEP
  // async function getRecipe() {
  //   const recipeGenerated = await generateRecipe(newIngr);
  //   return (
  //     <section className="markdown-section">
  //       <ReactMarkdown
  //         components={{
  //           h1: ({ children }) => <h2>{children}</h2>,
  //           h2: ({ children }) => <h3>{children}</h3>,
  //         }}
  //       >
  //         {recipeGenerated}
  //       </ReactMarkdown>
  //     </section>
  //   );
  // }

  function getRecipe() {
    const markdown = recipeMd;
    return (
      <section className="markdown-section">
        <ReactMarkdown
          components={{
            h1: ({ children }) => <h2>{children}</h2>,
            h2: ({ children }) => <h3>{children}</h3>,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </section>
    );
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
