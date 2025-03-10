import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import mongoose from "mongoose";
import Interaction from "./models/Interaction.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "❌ Erro ao conectar no MongoDB"));
db.once("open", () => console.log("✅ Conectado ao MongoDB Atlas!"));

const app = express();

// 🔥 CONFIGURAÇÃO COMPLETA DO CORS (AGORA FUNCIONA 100%)
app.use(cors({
  origin: ["https://sls-automaca-git-main-socrates-luiz-dos-santos-projects.vercel.app", "https://sls-automaca.vercel.app"], // Adicione todos os domínios do frontend
  methods: "GET, POST, OPTIONS",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true
}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(bodyParser.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// 🔥 Inicializa a IA do Gemini
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 🔥 Rota de Chat com CORS corrigido
app.options("/chat", (req, res) => { // Permite requisições OPTIONS (preflight)
  res.sendStatus(200);
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ reply: "Mensagem inválida" });
    }

    // 🔥 Envia a mensagem para a IA
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    // 🔥 Salva no MongoDB Atlas
    const interaction = new Interaction({
      userMessage: message,
      botResponse: text,
    });

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
