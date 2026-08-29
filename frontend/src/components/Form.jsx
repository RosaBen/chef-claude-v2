export default function Form({ set }) {
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    set((prev) => [...prev, newIngredient]);
  }
  return (
    <form action={addIngredient}>
      <input
        type="text"
        placeholder="e.g. oregano"
        aria-label="Add ingredient"
        name="ingredient"
      />
      <button>+ Add ingredient</button>
    </form>
  );
}
