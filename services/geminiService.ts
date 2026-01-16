
import { GoogleGenAI } from "@google/genai";

export interface HeroInsight {
  tips: string;
}

export class GeminiService {
  async getHeroInsights(aovHero: string, hokHero: string): Promise<HeroInsight> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Arena of Valor'daki ${aovHero} ile Honor of Kings'deki ${hokHero} arasındaki benzerlikler hakkında kısa, teknik bir bilgi ver. İnternet araması yapma, sadece iç bilginle yanıtla.`,
        config: {
          temperature: 0.1,
        }
      });

      return {
        tips: response.text || "Bilgi alınamadı."
      };
    } catch (error) {
      console.error("Gemini Error:", error);
      return { tips: "Benzerlik detayları şu an yüklenemiyor." };
    }
  }
}

export const geminiService = new GeminiService();
