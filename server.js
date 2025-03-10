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

// ✅ CORS Configurado corretamente!
const allowedOrigins = [
  "https://sls-automaca-git-main-socrates-luiz-dos-santos-projects.vercel.app",
  "https://sls-automaca.vercel.app",
  "https://sls-automaca-pl6zmh55f-socrates-luiz-dos-santos-projects.vercel.app/"
];

app.use(
  cors({
    origin: allowedOrigins, // Permite apenas os domínios especificados
    methods: "GET, POST, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  })
);

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(bodyParser.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// 🔥 Inicializa a IA do Gemini
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 🔥 Rota de Chat com CORS corrigido
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ reply: "Mensagem inválida" });
    }

    // 🔥 Envia a mensagem para a IA
    const result = await model.generateContent(message);
   
