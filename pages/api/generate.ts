import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.OPENAI_API_KEY) {
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

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Suggest three pet names for the following ${pet}`,
        },
      ],
      temperature: 0.8,
      max_tokens: 100,
    });

    res.status(200).json({ result: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({
      error: {
        message: "An error occurred during your request to OpenAI API",
      },
    });
  }
}
