import * as dotenv from "dotenv";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { Configuration, OpenAIApi } from "openai";

const envPath = path.join(process.cwd(), ".env");
dotenv.config({ path: envPath });

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured",
      },
    });
    return;
  }

  const pet = req.body.pet;

  if (!pet) {
    res.status(500).json({
      error: {
        message: "Please enter a valid pet",
      },
    });
    return;
  }

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `suggest three pet names for the following ${pet}`,
      temperature: 0.8,
      max_tokens: 100,
    });
    res.status(200).json({ result: response.data.choices[0].text });
  } catch (error) {
    res.status(500).json({
      error: {
        message: "An error occurred during your request to OpenAI API",
      },
    });
  }
}
