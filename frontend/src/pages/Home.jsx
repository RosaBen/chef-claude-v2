import { useState } from "react";
import Form from "../components/Form";
import Ingredients from "../components/Ingredients";

export default function Home({ ingredients }) {
  const [newIngr, setNewIngr] = useState(ingredients);
  const styleList = newIngr.length ? { display: "block" } : { display: "none" };
  const styleHome =
    newIngr.length > 2 ? { display: "grid" } : { display: "none" };

  return (
    <main>
      <Form ingredients={ingredients} set={setNewIngr} />
      <section className="list-ingredients" style={styleList}>
        <h2>Ingredients on hand:</h2>
        <Ingredients newArray={newIngr} />
      </section>
      <section className="get-recipe" style={styleHome}>
        <h2>Ready for a recipe?</h2>
        <p>Generate a recipe from your list of ingredients.</p>
        <button>Get a recipe</button>
      </section>
    </main>
  );
}
