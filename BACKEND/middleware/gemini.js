require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Tell me a fun fact about space",
    });

    console.log(response.text);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

main();