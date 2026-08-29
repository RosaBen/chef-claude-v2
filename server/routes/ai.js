import express from "express";
import { InferenceClient } from "@huggingface/inference";
import Anthropic from "@anthropic-ai/sdk";
import { createRecipe } from "../prompts/recipePrompt.js";
import { recipe } from "../../frontend/src/assets/scripts/utils.js";
const router = express.Router();

// console.log("HF TOKEN :", !!process.env.HF_ACCESS_TOKEN);
// console.log("HF MODEL :", process.env.HF_MODEL);

// const client = new InferenceClient(process.env.HF_ACCESS_TOKEN);

router.post("/", async function (req, res, next) {
  try {
    const { ingredients } = req.body;

    if (!ingredients || !Array.isArray(ingredients)) {
      return res.status(400).json({
        error: "La liste d'ingrédients est obligatoire"
      });
    }

    const prompt = createRecipe(ingredients);

    const response = await fetch("https://api.free.ai/v1/chat/", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.FREE_AI_TOKEN}`, "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: [{ role: "system", content: "You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page" }, { role: "user", content: prompt }],
        model: "qwen7b"
      })
    });

    if (!response.ok) {
      const error = await response.text();
      return res.status(response.status).json({
        error: "erreur free.ai",
        details: error,
      });
    }

    const data = await response.json();
    const recipe = data.choices[0].message.content;
    // const completion = await client.chatCompletion({
    //   model: "qwen7b",
    //   messages: [
    //     {
    //       role: "system",
    //       content: "You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page"
    //     },
    //     {
    //       role: "user",
    //       content: prompt
    //     },
    //   ],
    //   max_tokens: 1024,
    //   // temperature: 0.7,
    // });
    // console.log(completion.choices[0].message.content);
    // const answer = completion.choices[0].message.content;
    // res.json({
    //   recipe: answer,
    // });

    res.json({
      recipe,
    });

  } catch (error) {
    console.error(
      "HF ERROR ===>",
      error);
    res.status(500).json({
      error: "Impossible de générer la recette"
    });
  }
});

export default router;