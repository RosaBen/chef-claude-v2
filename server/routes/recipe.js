import express from "express";
const router = express.Router();

// Get recipe

router.get("/", async function (req, res, next) {
  try {
    const ingredients = req.query.ingredients;
    console.log(ingredients);
    const response = await fetch(`${process.env.SPOONACULAR_URL}${process.env.URL_RECIPES}?apiKey=${process.env.SPOONACULAR_API_KEY}&ingredients=${ingredients}`);
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