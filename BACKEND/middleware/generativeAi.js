const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

const Hospital = require("../models/Hospital.js");
const promptAI = require("../utils/promptAi.js");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateResponse = async (req, res, next) => {
    try {

        // Check image
        if (!req.file) {
            return res.status(400).json({
                message: "No image uploaded",
            });
        }

        console.log(req.file);
console.log(req.body);

        // Convert image to base64
        const base64Image = req.file.buffer.toString("base64");

        // Gemini model
        const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

        // Generate AI response
        const result = await model.generateContent({
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: promptAI,
                        },
                        {
                            inlineData: {
                                mimeType: req.file.mimetype,
                                data: base64Image,
                            },
                        },
                    ],
                },
            ],
        });

        // Response text
        const text = result.response.text();

        console.log("RAW AI RESPONSE:\n", text);

        // Clean markdown if Gemini sends ```json
        const cleanText = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        // Parse JSON
        let aiData;

        try {
            aiData = JSON.parse(cleanText);
        } catch (err) {
            return res.status(500).json({
                message: "Invalid AI response format",
                raw: text,
                error: err.message,
            });
        }

        // Confidence check
        if (!aiData.confidence) {
            return res.status(400).json({
                message: "AI not confident, update skipped",
                aiData,
            });
        }

        // Final inventory
        let finalInventory = aiData.final || {};

        let logs = false;

        // If final inventory not directly detected
        if (!aiData.detected?.final) {

            // Initial + logs
            if (aiData.detected?.initial && aiData.detected?.logs) {

                finalInventory = {};

                for (let group in aiData.initial) {
                    finalInventory[group] =
                        (aiData.initial[group] || 0) +
                        (aiData.logs[group] || 0);
                }

            }

            // Only logs
            else if (aiData.detected?.logs) {
                finalInventory = aiData.logs;
                logs = true;
            }

            // Only initial
            else if (aiData.detected?.initial) {
                finalInventory = aiData.initial;
            }
        }

        // Add logs to existing inventory
        if (logs) {

            const hospital = await Hospital.findById(req.user.id);

            if (!hospital) {
                return res.status(404).json({
                    message: "Hospital not found",
                });
            }

            for (let group in finalInventory) {
                finalInventory[group] =
                    (hospital.inventory[group] || 0) +
                    finalInventory[group];
            }
        }

        // Save AI response in request
        req.AIresponse = finalInventory;

        next();

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            message: "Internal server error",
            error: err.message,
        });
    }
};

module.exports = { generateResponse };