import express from "express";
const router = express.Router();
/* GET Recipe instructions */
router.get('/:id', async function (req, res, next) {
  try {
    const recipeId = req.params.id;
    const response = await fetch(`${process.env.SPOONACULAR_URL}/recipes/${recipeId}/analyzedInstructions?apiKey=${process.env.SPOONACULAR_API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Erreur lors de la récupération"
    });
  }
});



export default router;


// https://api.spoonacular.com/recipes/324694/analyzedInstructions