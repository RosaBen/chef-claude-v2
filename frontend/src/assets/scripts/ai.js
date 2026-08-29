export default async function generateRecipe (ingredients) {
  console.log(ingredients);
  try {
    const response = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients,
      })
    });
    if (!response.ok) {
      throw new Error(`Erreur http===> ${response.status}`);
    }
    return await response.json();

  } catch (error) {
    console.error("Erreur ia====>", error);
    throw error;
  }
}