// export async function getRecipe (array) {
//   const encodedIngredients = array.map(item => encodeURIComponent(item)).join(",+");
//   try {
//     const response = await fetch(`/api/recipe?ingredients=${encodedIngredients}&number=1`);
//     if (!response.ok) {
//       throw new Error(`Erreur HTTP: ${response.status}`);
//     }
//     const data = await response.json();
//     return data[getRandomRecipe()];
//   } catch (error) {
//     console.error("erreur de récupération:", error);
//     throw error;
//   }
// }

export function getRecipe (array) {
  const recipeId = array[getRandomRecipe()].id;
  return recipeId;
}




// export async function getRecipeInstructions (id) {
//   try {
//     const response = await fetch(`/api/instructions/${id}`);
//     if (!response.ok) {
//       throw new Error(`Erreur HTTP: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("erreur de récupération:", error);
//     throw error;
//   }
// }


export function getRecipeInstructions (id) {
  const listInstructions = instructions.find(item => item.id === id);
  return listInstructions;
}



export function getRandomRecipe () {
  const recipeIndex = Math.floor(Math.random() * 2);
  return recipeIndex;
}

export const ingredients = [];

export const recipe = [
  {
    id: 123,
    title: "chicken soup"
  },
  {
    id: 250,
    title: "cranberry sauce"
  }
];

export const instructions = [
  {
    id: 123,
    name: "",
    steps: [
      {
        number: 1, step: "Preheat the oven to 350 degrees and grease or butter a 913 glass baking dish.",
        ingredients: [{
          id: 1001, name: "butter", localizedName: "butter",
          image: "butter-sliced.jpg"
        }],
        equipment: [
          {
            id: 406921,
            name: "glass baking pan",
            localizedName: "glass baking pan",
            image: "https://spoonacular.com/cdn/equipment_100x100/glass-baking-tray.jpg"
          },
          { id: 404784, name: "oven", localizedName: "oven", image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg" }]
      },
      {
        number: 2,
        step: "In a large bowl, toss together the chopped apples, cranberries and sugar.", ingredients: [
          {
            id: 9078,
            name: "cranberries",
            localizedName: "cranberries", image: "cranberries.jpg"
          }, { id: 9003, name: "apple", localizedName: "apple", image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg" }, { id: 19335, name: "sugar", localizedName: "sugar", image: "sugar-in-bowl.png" }], equipment: [{ id: 404783, name: "bowl", localizedName: "bowl", image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg" }]
      }, { number: 3, step: "Let stand for a few minutes then pour into the baking dish.", ingredients: [], equipment: [{ id: 404646, name: "baking pan", localizedName: "baking pan", image: "https://spoonacular.com/cdn/equipment_100x100/roasting-pan.jpg" }] }, { number: 4, step: "Dot the mixture with the 1/2 stick of cubed butter.", ingredients: [{ id: 1001, name: "butter", localizedName: "butter", image: "butter-sliced.jpg" }], equipment: [] }, { number: 5, step: "In a medium bowl, combine the oats, brown sugar and flour.", ingredients: [{ id: 19334, name: "brown sugar", localizedName: "brown sugar", image: "dark-brown-sugar.png" }, { id: 20081, name: "all purpose flour", localizedName: "all purpose flour", image: "flour.png" }, { id: 8120, name: "oats", localizedName: "oats", image: "rolled-oats.jpg" }], equipment: [{ id: 404783, name: "bowl", localizedName: "bowl", image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg" }] }, { number: 6, step: "Sprinkle evenly over the cranberries and apples in the baking dish.  Gently pour the melted butter over the top.", ingredients: [{ id: 9078, name: "cranberries", localizedName: "cranberries", image: "cranberries.jpg" }, { id: 9003, name: "apple", localizedName: "apple", image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg" }, { id: 1001, name: "butter", localizedName: "butter", image: "butter-sliced.jpg" }], equipment: [{ id: 404646, name: "baking pan", localizedName: "baking pan", image: "https://spoonacular.com/cdn/equipment_100x100/roasting-pan.jpg" }] }, { number: 7, step: "Cover with aluminum foil and bake for 35 minutes.", ingredients: [], equipment: [{ id: 404765, name: "aluminum foil", localizedName: "aluminum foil", image: "https://spoonacular.com/cdn/equipment_100x100/aluminum-foil.png" }, { id: 404784, name: "oven", localizedName: "oven", image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg" }], "length": { number: 35, unit: "minutes" } }, { number: 8, step: "Remove the foil and bake for an additional 15 minutes, or until the oat topping is nicely browned.", ingredients: [], equipment: [{ id: 404784, name: "oven", localizedName: "oven", image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg" }, { id: 404765, name: "aluminum foil", localizedName: "aluminum foil", image: "https://spoonacular.com/cdn/equipment_100x100/aluminum-foil.png" }], "length": { number: 15, unit: "minutes" } }, {
        number: 9, step: "Serve warm as a side or for dessert with a scoop of vanilla ice cream.", ingredients: [{ id: 19095, name: "vanilla ice cream", localizedName: "vanilla ice cream", image: "vanilla-ice-cream.png" }], equipment: []
      }]
  },
  {
    id: 250,
    name: "",
    steps: [
      {
        number: 1, step: "Preheat the oven to 350 degrees and grease or butter a 913 glass baking dish.",
        ingredients: [{
          id: 1001, name: "butter", localizedName: "butter",
          image: "butter-sliced.jpg"
        }],
        equipment: [
          {
            id: 406921,
            name: "glass baking pan",
            localizedName: "glass baking pan",
            image: "https://spoonacular.com/cdn/equipment_100x100/glass-baking-tray.jpg"
          },
          { id: 404784, name: "oven", localizedName: "oven", image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg" }]
      },
      {
        number: 2,
        step: "In a large bowl, toss together the chopped apples, cranberries and sugar.", ingredients: [
          {
            id: 9078,
            name: "cranberries",
            localizedName: "cranberries", image: "cranberries.jpg"
          }, { id: 9003, name: "apple", localizedName: "apple", image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg" }, { id: 19335, name: "sugar", localizedName: "sugar", image: "sugar-in-bowl.png" }], equipment: [{ id: 404783, name: "bowl", localizedName: "bowl", image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg" }]
      }, { number: 3, step: "Let stand for a few minutes then pour into the baking dish.", ingredients: [], equipment: [{ id: 404646, name: "baking pan", localizedName: "baking pan", image: "https://spoonacular.com/cdn/equipment_100x100/roasting-pan.jpg" }] }, { number: 4, step: "Dot the mixture with the 1/2 stick of cubed butter.", ingredients: [{ id: 1001, name: "butter", localizedName: "butter", image: "butter-sliced.jpg" }], equipment: [] }, { number: 5, step: "In a medium bowl, combine the oats, brown sugar and flour.", ingredients: [{ id: 19334, name: "brown sugar", localizedName: "brown sugar", image: "dark-brown-sugar.png" }, { id: 20081, name: "all purpose flour", localizedName: "all purpose flour", image: "flour.png" }, { id: 8120, name: "oats", localizedName: "oats", image: "rolled-oats.jpg" }], equipment: [{ id: 404783, name: "bowl", localizedName: "bowl", image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg" }] }, { number: 6, step: "Sprinkle evenly over the cranberries and apples in the baking dish.  Gently pour the melted butter over the top.", ingredients: [{ id: 9078, name: "cranberries", localizedName: "cranberries", image: "cranberries.jpg" }, { id: 9003, name: "apple", localizedName: "apple", image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg" }, { id: 1001, name: "butter", localizedName: "butter", image: "butter-sliced.jpg" }], equipment: [{ id: 404646, name: "baking pan", localizedName: "baking pan", image: "https://spoonacular.com/cdn/equipment_100x100/roasting-pan.jpg" }] }, { number: 7, step: "Cover with aluminum foil and bake for 35 minutes.", ingredients: [], equipment: [{ id: 404765, name: "aluminum foil", localizedName: "aluminum foil", image: "https://spoonacular.com/cdn/equipment_100x100/aluminum-foil.png" }, { id: 404784, name: "oven", localizedName: "oven", image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg" }], "length": { number: 35, unit: "minutes" } }, { number: 8, step: "Remove the foil and bake for an additional 15 minutes, or until the oat topping is nicely browned.", ingredients: [], equipment: [{ id: 404784, name: "oven", localizedName: "oven", image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg" }, { id: 404765, name: "aluminum foil", localizedName: "aluminum foil", image: "https://spoonacular.com/cdn/equipment_100x100/aluminum-foil.png" }], "length": { number: 15, unit: "minutes" } }, {
        number: 9, step: "Serve warm as a side or for dessert with a scoop of vanilla ice cream.", ingredients: [{ id: 19095, name: "vanilla ice cream", localizedName: "vanilla ice cream", image: "vanilla-ice-cream.png" }], equipment: []
      }]
  }
];

export const myRecipe = `<section>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
        <h3>Beef Bolognese Pasta</h3>
        <strong>Ingredients:</strong>
        <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
            <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
            <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
            <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
            <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
            <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
        </ol>
    </article>
</section>`;
