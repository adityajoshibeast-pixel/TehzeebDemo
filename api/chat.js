// Vercel serverless function: /api/chat
// The Groq API key lives ONLY here, as a server environment variable
// (set it in Vercel dashboard → Project → Settings → Environment Variables → GROQ_API_KEY).
// The browser never sees it.

// --- Manual .env.local fallback loader ---
// Some local setups don't auto-load .env.local into process.env.
// If GROQ_API_KEY isn't already set, read it directly from the file.
if (!process.env.GROQ_API_KEY) {
  try {
    const fs = require("fs");
    const path = require("path");
    const envPath = path.join(process.cwd(), ".env.local");
    const envContent = fs.readFileSync(envPath, "utf8");
    envContent.split(/\r?\n/).forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return;
      const eqIndex = trimmed.indexOf("=");
      if (eqIndex === -1) return;
      const key = trimmed.slice(0, eqIndex).trim();
      let value = trimmed.slice(eqIndex + 1).trim();
      value = value.replace(/^["']|["']$/g, ""); // strip surrounding quotes if any
      if (key && !process.env[key]) process.env[key] = value;
    });
  } catch (e) {
    // .env.local not found or unreadable — will fall through to the
    // "missing GROQ_API_KEY" error below, which is still a clear signal.
  }
}

const GROQ_MODEL = "llama-3.1-8b-instant"; // smallest/cheapest Groq model — good enough for restaurant FAQ
const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Server is missing GROQ_API_KEY. Set it in Vercel project settings." });
    return;
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages)) {
    res.status(400).json({ error: "Request body must include a 'messages' array." });
    return;
  }

  try {
    const groqRes = await fetch(GROQ_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages,
        temperature: 0.4,
        max_tokens: 400
      })
    });

    const data = await groqRes.json();

    if (!groqRes.ok) {
      res.status(groqRes.status).json({ error: data.error?.message || "Groq API error" });
      return;
    }

    const reply = data.choices?.[0]?.message?.content?.trim() || "Sorry, I didn't catch that.";
    res.status(200).json({ reply });
  } catch (err) {
    res.status(500).json({ error: err.message || "Unknown server error" });
  }
};
