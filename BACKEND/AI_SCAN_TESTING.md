# AI Inventory Scan — Testing Guide

This document explains how to test the `/api/hospitals/inventory/ai-scan` endpoint (the `generateResponse` middleware + `inventoryScan` controller) using Postman or Thunder Client.

**Quick summary**: The endpoint expects an authenticated hospital user and a single image upload (form-data file field named `image`). The server runs the Google Gemini (Gemini Vision) call via `generativeAi.js` and updates the hospital `inventory` with parsed results.

---

## Prerequisites
- Node.js and npm installed.
- Server running from `BACKEND` folder:

```bash
cd BACKEND
npm install
node index.js
# or use nodemon if installed
nodemon index.js
```

- Environment variables set in `.env`:
  - `DB_URL` — MongoDB connection
  - `GEMINI_API_KEY` — Gemini API key (required to call the vision model)
  - `FRONTEND_URL` (optional)

- The repo now includes a multer memory-upload handler on the route to populate `req.file.buffer` (file field name `image`).

- You must have a hospital account and a valid hospital JWT token. Use these endpoints to prepare:

- Register hospital: `POST /api/auth/register-hospital`
- Login hospital: `POST /api/auth/login` → response includes token. Save it as `<HOSPITAL_TOKEN>`.

Base URL for local testing: `http://localhost:5000/api`.

---

## Endpoint
POST `http://localhost:5000/api/hospitals/inventory/ai-scan`

- Auth: `Authorization: Bearer <HOSPITAL_TOKEN>`
- Body: `multipart/form-data`
- File field name: `image` (type: File)

---

## Postman — Step by step
1. Open Postman and create a new `POST` request to `http://localhost:5000/api/hospitals/inventory/ai-scan`.
2. Under `Authorization` tab: select `Bearer Token` and paste `<HOSPITAL_TOKEN>`.
3. Under `Headers`: you do not need to set `Content-Type`; Postman sets it automatically for form-data.
4. Under `Body` tab: choose `form-data`.
   - Add a key named `image` and set the type to `File` (on the right side). Select an image file from disk (e.g., a photo of the hospital blood bank inventory sheet).
5. Send the request.

### Expected successful response (HTTP 200)
```json
{
  "message": "Inventory updated successfully from AI scan",
  "inventory": {
    "A+": 10,
    "A-": 2,
    "B+": 5,
    "B-": 1,
    "AB+": 0,
    "AB-": 0,
    "O+": 12,
    "O-": 3
  }
}
```

Actual numbers depend on the AI extraction result.

---

## Thunder Client (VS Code) — Step by step
1. Install Thunder Client extension in VS Code if not already installed.
2. Create a new request, set method to `POST` and URL to `http://localhost:5000/api/hospitals/inventory/ai-scan`.
3. In the `Auth` section choose `Bearer Token` and paste `<HOSPITAL_TOKEN>`.
4. In the `Body` tab select `form-data`.
   - Add a key `image`, change its type to `File` and pick an image.
5. Send request and inspect response JSON.

---

## cURL example

Use `-F` to send multipart/form-data file upload:

```bash
curl -X POST "http://localhost:5000/api/hospitals/inventory/ai-scan" \
  -H "Authorization: Bearer <HOSPITAL_TOKEN>" \
  -F "image=@/path/to/inventory-photo.jpg"
```

---

## What the AI middleware expects and returns
- The `generativeAi.js` middleware constructs a prompt (see `utils/promptAi.js`) and sends the image as base64 to Gemini Vision.
- The middleware expects the model response to contain a JSON object with the structure described in the prompt (fields: `confidence`, `detected`, `initial`, `logs`, `final`).
- Middleware derives a final inventory object (keys: `A+`, `A-`, `B+`, `B-`, `AB+`, `AB-`, `O+`, `O-`) and attaches it to `req.AIresponse`.
- `hospitalController.inventoryScan` then saves this inventory and returns the updated inventory.

Sample AI JSON (from prompt rules):
```json
{
  "confidence": true,
  "detected": { "initial": true, "logs": false, "final": true },
  "initial": { "A+": 10, "A-": 2, "B+": 5, "B-": 1, "AB+": 0, "AB-": 0, "O+": 12, "O-": 3 },
  "logs": { "A+": 0, "A-": 0, "B+": 0, "B-": 0, "AB+": 0, "AB-": 0, "O+": 0, "O-": 0 },
  "final": { "A+": 10, "A-": 2, "B+": 5, "B-": 1, "AB+": 0, "AB-": 0, "O+": 12, "O-": 3 }
}
```

---

## Troubleshooting
- 400 "No image uploaded":
  - Ensure the request is `multipart/form-data` and the file key is named `image` (not `file` or other). In Postman/Thunder Client use `form-data` and set the `image` key type to `File`.
  - Confirm the server was restarted after code changes (we added multer to the route). Restart Node / nodemon.

- 401 Unauthorized / 403 Forbidden:
  - Ensure the token is valid and belongs to a hospital user. Use `POST /api/auth/login` to get a token.
  - Confirm `isHospital` middleware recognizes the user as hospital (check user role in DB).

- 500 Invalid AI response format or "Invalid AI response format":
  - Gemini returned unexpected text that could not be parsed to JSON. The middleware slices the first `{`..`}` block — if the model returns explanatory text, parsing may fail.
  - Check server logs (console output) — `generativeAi.js` logs raw responses when parsing fails.

- AI returns `confidence: false`:
  - The middleware forwards a 400 with `AI not confident, update skipped`.
  - Try a clearer, higher-resolution photo of the inventory sheet or enhance contrast.

---

## Test cases to try
1. Valid hospital token + clear inventory photo → expect 200 and updated `inventory` in response.
2. Valid token, but AI low confidence or malformed output → expect 400 (AI not confident) or 500 (invalid AI response format). Check `raw` field in error for model output.
3. Missing token → 401 Unauthorized.
4. Non-hospital token (a donor user) → 403 Forbidden (via `isHospital` middleware).

---

## Quick checklist before sending request
- Server running and connected to MongoDB
- `.env` contains `GEMINI_API_KEY` and `DB_URL`
- Hospital account exists and you have its token
- Use `form-data` body and `image` file key
- Restart server after code changes

---

## Optional: Test using base64 JSON (for debugging)
If you cannot send form-data from your client, you can temporarily modify `generativeAi.js` to accept a base64 string in the JSON body (key `image_base64`) for local testing. Example request body:

```json
{
  "image_base64": "<base64-data>"
}
```

(Do not leave this in production; prefer multipart uploads.)

---

If you'd like, I can also:
- Add a Postman collection with a prebuilt request and an environment with a placeholder token.
- Run the endpoint locally with an example image and show the actual response from your running server.

Happy to continue — do you want a Postman collection file next? 
