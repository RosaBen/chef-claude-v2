import { useState } from "react";
import Form from "../components/Form";
import Ingredients from "../components/Ingredients";

export default function Home({ ingredients }) {
  const [newIngr, setNewIngr] = useState(ingredients);
  console.log(newIngr);
  return (
    <main>
      <Form ingredients={ingredients} set={setNewIngr} />
      <section className="list-ingredients">
        <h2>Ingredients on hand:</h2>
        <Ingredients newArray={newIngr} />
      </section>
    </main>
  );
}
