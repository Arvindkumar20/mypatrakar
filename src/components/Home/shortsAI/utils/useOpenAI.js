// src/hooks/useOpenAI.js
import OpenAI from "openai";
export default function useOpenAI() {
  const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true, // ⚠️ Allow client-side usage (for testing only)
  });
  const generateContent = async (prompt) => {
    if (!prompt) return "Please provide a prompt!";
    try {
      const res = await client.chat.completions.create({
        model: "gpt-4o-mini", // Fast and capable
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that generates clean, structured responses.",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
      });

      return res.choices?.[0]?.message?.content || "No response from AI.";
    } catch (err) {
      console.log(err)
      console.error("OpenAI Error:", err);
      return "Error generating content.";
    }
  };
  return { generateContent };
}