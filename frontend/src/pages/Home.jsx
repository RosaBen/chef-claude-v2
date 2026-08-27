import { useState } from "react";
import Form from "../components/Form";
import Ingredients from "../components/Ingredients";

export default function Home({ ingredients }) {
  const [newIngr, setNewIngr] = useState(ingredients);
  const style =
    newIngr.length === 0 ? { display: "none" } : { display: "block" };

  return (
    <main>
      <Form ingredients={ingredients} set={setNewIngr} />
      <section className="list-ingredients" style={style}>
        <h2>Ingredients on hand:</h2>
        <Ingredients newArray={newIngr} />
      </section>
      <section className="get-recipe">
        <h2>Ready for a recipe?</h2>
        <p>Generate a recipe from your list of ingredients.</p>
        <button>Get a recipe</button>
      </section>
    </main>
  );
}
