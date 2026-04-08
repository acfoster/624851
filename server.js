import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 4173;
const distPath = path.join(__dirname, "dist");

app.use(express.json());
app.use(express.static(distPath, { extensions: ["html"] }));

// Contact form — sends via Resend API
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM || "624851 NB Inc. <contact@624851.com>";

  if (!apiKey || apiKey === "your_resend_api_key_here") {
    console.error("RESEND_API_KEY is not configured.");
    return res
      .status(500)
      .json({ error: "Mail service is not configured. Please email info@624851.com directly." });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: ["info@624851.com"],
        reply_to: email,
        subject: `Website inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><hr><p>${message.replace(/\n/g, "<br>")}</p>`,
      }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.message || `Resend error ${response.status}`);
    }

    return res.json({ success: true });
  } catch (err) {
    console.error("Resend send failed:", err.message);
    return res.status(500).json({
      error: "Failed to send your message. Please email info@624851.com directly.",
    });
  }
});

app.get("/*rest", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`624851 NB Inc. site listening on port ${port}`);
});
