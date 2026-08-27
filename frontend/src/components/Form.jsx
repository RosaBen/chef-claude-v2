export default function Form({ set }) {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const newIngredient = formData.get("ingredient");
  //   set((prev) => [...prev, newIngredient]);
  // }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    set((prev) => [...prev, newIngredient]);
  }
  return (
    // <form onSubmit={handleSubmit}>
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
