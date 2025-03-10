import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import mongoose from "mongoose";
import Interaction from "./models/Interaction.js";

dotenv.config();

const app = express();

// 🔥 Configuração correta do CORS
app.use(cors({
  origin: "*", // Permite acesso de qualquer origem (ajuste se necessário)
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ Conectado ao MongoDB Atlas!"))
  .catch(err => console.error("❌ Erro ao conectar ao MongoDB:", err));

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// 🔥 Inicializa a IA do Gemini
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 🔥 Rota de Chat
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ reply: "Mensagem inválida" });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    // 🔥 Salva no MongoDB
    const interaction = new Interaction({ userMessage: message, botResponse: text });
    await interaction.save();

    console.log("💾 Interação salva no banco de dados!");
    res.json({ reply: text });
  } catch (error) {
    console.error("Erro ao conectar com a API Gemini:", error);
    res.status(500).json({ reply: "Erro ao obter resposta da IA." });
  }
});

// 🔥 Servidor rodando
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Servidor rodando na porta ${PORT}`));
