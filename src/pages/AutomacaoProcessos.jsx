import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../assets/rpa.jpg"; // 🔥 Imagem de fundo
import { FaRobot, FaBrain, FaProjectDiagram, FaLink } from "react-icons/fa";


const AutomacaoProcessos = () => {
  const navigate = useNavigate();

  // 🔥 Dados dos cards (título, descrição, vídeo)
  const cards = [
    {
      icon: <FaRobot />, // 🔥 Ícone do RPA
      title: "RPA",
      description: "Robotic Process Automation (RPA) automatiza tarefas repetitivas em sistemas, melhorando eficiência e reduzindo erros.",
      video: "https://www.youtube.com/embed/lAmWQ9IkM1I",
    },
    {
      icon: <FaBrain />, // 🔥 Ícone de Inteligência Artificial
      title: "Inteligência Artificial",
      description: "A IA usa aprendizado de máquina para criar soluções inteligentes, como chatbots, análise de dados e previsões.",
      video: "https://www.youtube.com/embed/e8WaYyiS6a4",
    },
    {
      icon: <FaProjectDiagram />, // 🔥 Ícone de BPM
      title: "BPM (Business Process Management)",
      description: "BPM é a gestão eficiente de processos de negócio, ajudando empresas a otimizar operações e fluxos de trabalho.",
      video: "https://www.youtube.com/embed/FRayC9vw6PA",
    },
    {
      icon: <FaLink />, // 🔥 Ícone de API
      title: "APIs e Integrações",
      description: "APIs permitem a comunicação entre diferentes sistemas, possibilitando integrações rápidas e eficientes.",
      video: "https://www.youtube.com/embed/3LHSyha0xN0",
    },
  ];
  

  return (
    <section style={styles.container}>
      {/* 🔥 Imagem de Fundo */}
      <div style={{ ...styles.background, backgroundImage: `url(${BackgroundImage})` }}></div>

      {/* 🔥 Título principal */}
      <motion.h1 style={styles.title} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        Automação de Processos
        <p style={styles.cardText}>
            Nesta página, veremos algumas possibilidades e o que dizem os especialistas que trabalham
            na área da automação.

        </p>
      </motion.h1>

      {/* 🔥 Grid de Cards */}
      <motion.div style={styles.grid} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
        {cards.map((card, index) => (
          <motion.div key={index} style={styles.card} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <h2 style={styles.cardTitle}>{card.icon} {card.title}</h2>
            <p style={styles.cardText}>{card.description}</p>
            <iframe
              style={styles.video}
              width="100%"
              height="200"
              src={card.video}
              title={card.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        ))}
      </motion.div>

      {/* 🔙 Botão de voltar */}
      <button style={styles.backButton} onClick={() => navigate("/")}>🔙 Voltar</button>
    </section>
  );
};

const styles = {
  container: {
    padding: "10vh 5vw",
    textAlign: "center",
    color: "#fff",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.3,
    zIndex: -1,
  },

  title: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    marginBottom: "40px",
    textShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
  },

  /** 🔥 Grid responsivo para os cards */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // 🔥 Se adapta ao tamanho da tela
    gap: "20px",
    justifyContent: "center",
    alignItems: "stretch",
  },

  /** 🔥 Estilização dos cards */
  card: {
    background: "rgba(0, 0, 0, 0.7)",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(255, 152, 0, 0.3)",
    transition: "transform 0.3s, box-shadow 0.3s",
  },

  cardTitle: {
    fontSize: "clamp(1.5rem, 2vw, 2rem)",
    marginBottom: "10px",
    color: "#ff9800",
  },

  cardText: {
    fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
    opacity: 0.9,
    marginBottom: "15px",
  },

  video: {
    borderRadius: "8px",
    marginTop: "10px",
  },

  /** 🔙 Botão de Voltar */
  backButton: {
    marginTop: "30px",
    padding: "12px 24px",
    fontSize: "1rem",
    background: "#444",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "0.3s",
  },
};

export default AutomacaoProcessos;
