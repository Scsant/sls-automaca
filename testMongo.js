import mongoose from "mongoose";

const uri = "mongodb+srv://scsantos492:0608mubi@vitrine.sdcyk.mongodb.net/?retryWrites=true&w=majority&appName=vitrine";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Conectado ao MongoDB Atlas!"))
  .catch(err => console.error("❌ Erro ao conectar:", err));
