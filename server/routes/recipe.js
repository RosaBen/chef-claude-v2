import express from "express";
const router = express.Router();

// Get recipe

router.get("/", async function (req, res, next) {
  const controller = new AbortController;

  const timeout = setTimeout(() => {
    controller.abort;
  }, 5000);
  try {
    const ingredients = req.query.ingredients;
    const url = `${process.env.SPOONACULAR_URL}${process.env.URL_RECIPES}?apiKey=${process.env.SPOONACULAR_API_KEY}&ingredients=${ingredients}`;
    const response = await fetch(url, {
      signal: controller.signal
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("L'api a dépassé le temps imparti");
      return res.status(504).json({
        error: "La'pi mets trop de temps à répondre"
      });
    }
    console.error(error);
    res.status(500).json({
      error: "Erreur lors de la récupération"
    });
  } finally {
    clearTimeout(timeout);
  }
});

export default router;