import { GoogleGenAI, Type } from "@google/genai";
import { JUICE_MENU } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getJuiceRecommendation = async (userQuery: string): Promise<{ text: string; recommendedId?: string }> => {
  try {
    const menuContext = JUICE_MENU.map(j => 
      `${j.name} (ID: ${j.id}): Ingredients: ${j.ingredients.join(', ')}. Benefits: ${j.benefits.join(', ')}. Description: ${j.description}`
    ).join('\n');

    const prompt = `
      You are an expert juice mixologist and nutritionist at "Fruits Heaven". 
      Your goal is to recommend ONE juice from our menu based on the user's input.
      
      Our Menu:
      ${menuContext}

      User Input: "${userQuery}"

      Instructions:
      1. Analyze the user's request (mood, health need, flavor preference).
      2. Select the single best matching juice from the menu.
      3. Provide a short, friendly explanation (max 2 sentences) why this is the perfect choice.
      4. Return the result in JSON format with "recommendation_text" and "product_id".
      5. If the request is totally unrelated to juice/health, politely steer them back to juice.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendation_text: { type: Type.STRING },
            product_id: { type: Type.STRING, nullable: true },
          },
          required: ["recommendation_text"]
        }
      }
    });

    const json = JSON.parse(response.text || '{}');
    return {
      text: json.recommendation_text || "I couldn't find a specific match, but all our juices are delicious!",
      recommendedId: json.product_id || undefined
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "Our AI mixologist is taking a quick break. Why not try the Tropical Paradise?",
      recommendedId: 'j5'
    };
  }
};