export function createRecipe (ingredients) {
  const ingredientsString = ingredients.join(", ");
  return `Please give me a recipe you'd recommend I make! the recipe should have a title, a description, a list of ingredients and the steps to use them. at least 2 ingredients from ${ingredientsString} should be included in the recipe. return the recipe in markdown don't use block of code in markdown`;
}