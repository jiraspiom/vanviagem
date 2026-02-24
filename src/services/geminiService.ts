import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function analyzeCard(base64Image: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      {
        parts: [
          { text: "Extract all text and details from this business card. Identify the name, business name, routes, phone number, and any other relevant information for a transportation service website." },
          { inlineData: { mimeType: "image/png", data: base64Image } }
        ]
      }
    ]
  });
  return response.text;
}
