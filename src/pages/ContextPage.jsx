import React from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../assets/automacao2.jpg"; // 🔥 Imagem de fundo ilustrativa
import { useNavigate } from "react-router-dom"; // Para navegação

const ContextPage = () => {
  const navigate = useNavigate();

  return (
    <section style={styles.container}>
      {/* 🔥 Imagem de fundo */}
      <div style={styles.backgroundOverlay}></div>

      {/* 🔥 Conteúdo Principal */}
      <motion.div
        style={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={styles.title}>O que podemos fazer pela sua empresa?</h1>
        <p style={styles.text}>
            No mundo dinâmico da tecnologia, cada negócio tem necessidades únicas. 
            E é exatamente aí que entramos. Nossa missão é transformar desafios em soluções inteligentes, 
            conectando automação, dashboards interativos, machine learning e deep learning para criar sistemas
            que fazem a diferença no mundo real.
            Seja para otimizar processos, gerar insights estratégicos ou integrar novas tecnologias ao seu fluxo de trabalho, 
            nós desenvolvemos soluções sob medida para você. 
            Não importa o desafio, encontramos o caminho mais eficiente para resolvê-lo.
            A inovação não precisa ser complexa para ser transformadora. 
            Muitas empresas ainda enfrentam processos manuais que consomem tempo e aumentam as chances de erro. 
            Se você usa planilhas no seu dia a dia, saiba que podemos automatizar tarefas repetitivas com VBA no Excel, 
            otimizando fluxos de trabalho e liberando sua equipe para o que realmente importa.
            Dependendo do caso se o VBA não for suficiente podemos usar RPA com python, nossa equipe é muito versátil.
            Precisa consolidar relatórios automaticamente? 
            Gerar documentos a partir de dados? 
            Criar dashboards dinâmicos? 
            A tecnologia certa pode fazer tudo isso por você.
            E nós temos a equipe certa para você!
        </p>

        <div style={styles.techList}>
          <span>🔹 Python</span>
          <span>🔹 RPA</span>
          <span>🔹 JavaScript</span>
          <span>🔹 SQL</span>
          <span>🔹 Power BI</span>
        </div>

        <motion.button
          style={styles.button}
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/")}
        >
          ⬅ Voltar para Home
        </motion.button>
      </motion.div>
    </section>
  );
};

const styles = {
  container: {
    padding: "80px 20px",
    textAlign: "center",
    position: "relative",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundSize: "cover",
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.6,
    zIndex: -1,
  },
  content: {
    background: "rgba(7, 11, 19, 0.5)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(10px)",
    maxWidth: "600px",
    width: "90%",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  techList: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    fontSize: "1rem",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 25px",
    background: "linear-gradient(135deg,rgb(25, 40, 63),rgb(109, 108, 108))",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default ContextPage;
