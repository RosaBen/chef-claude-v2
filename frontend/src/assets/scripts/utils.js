export async function getRecipe (ingredients) {
  const encodedIngredients = ingredients.map(ingredient => encodeURIComponent(ingredient)).join(",+");
  try {
    const response = await fetch(`/api/recipe?ingredients=${encodedIngredients}&number=1`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("erreur de récupération:", error);
    throw error;
  }
}

export async function getRecipeInstructions (id) {
  try {
    const response = await fetch(`/api/instructions/${id}`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    const data = await response.json();
  } catch (error) {
    console.error("erreur de récupération:", error);
    throw error;
  }
}



export function getRandomRecipe (array) {
  const recipeIndex = Math.floor(Math.random() * array.length);
  return recipeIndex;

}