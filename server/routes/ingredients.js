import express from "express";
const router = express.Router();
/* GET ingredient */
router.get('/:ingredientName', async function (req, res, next) {
  try {
    const ingredientName = req.params.ingredientName;
    const response = await fetch(`${process.env.SPOONACULAR_URL}${process.env.URL_INGREDIENTS}?apiKey=${process.env.SPOONACULAR_API_KEY}&query=${encodeURIComponent(ingredientName)}`);
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
