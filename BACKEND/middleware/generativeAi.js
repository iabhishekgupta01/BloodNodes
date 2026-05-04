const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const promptAI = require("../utils/promptAi.js");

exports.generateResponse = async (req, res,next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No image uploaded" });
        }

        const base64Image = req.file.buffer.toString('base64');

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
        });

        const result = await model.generateContent([
            promptAI,
            {
                inlineData: {
                    data: base64Image,
                    mimeType: req.file.mimetype,
                },
            },
        ]);

        const text = result.response.text();

    const start = text.indexOf("{");
    const end = text.lastIndexOf("}") + 1;

    let aiData;
    try {
      aiData = JSON.parse(text.slice(start, end));
    } catch (err) {
      return res.status(500).json({
        message: "Invalid AI response format",
        raw: text,
      });
    }

    if (!aiData.confidence) {
      return res.status(400).json({
        message: "AI not confident, update skipped",
        aiData,
      });
    }




    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }
};
