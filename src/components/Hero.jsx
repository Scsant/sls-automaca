import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/post_automacao.jpg"; // 🔥 Imagem de fundo
import OverlayImage from "../assets/hero-visual.svg"; // 🔥 Imagem sobreposta com transparência
import { useNavigate } from "react-router-dom"; // Adicione isso no topo

const Hero = () => {
  const navigate = useNavigate(); // Dentro do componente Hero
  return (
    
    
    
    <section style={styles.container}>
      {/* 🔥 Imagem de fundo */}
      <motion.img
        src={HeroImage}
        alt="Automação Inteligente"
        style={styles.heroImage}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* 🔥 Imagem sobreposta com transparência */}
      <motion.img
        src={OverlayImage}
        alt="Automação RPA"
        style={styles.overlayImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }} // 🔥 Mantém a imagem com 80% de transparência
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* 🔥 Texto principal com fundo semitransparente */}
      <motion.div
        style={styles.textContainer}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={styles.title}>Aumente sua produtividade</h1>
       
        <p style={styles.servicesText}>Automação | Desenvolvimento de Sistemas | Dashboards Interativos</p>
      </motion.div>

      <motion.button
        style={styles.button}
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate("/contexto")} // 🔥 Redireciona para a nova página
      >
        Veja como podemos ajudar
      </motion.button>

    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "100px 20px",
    background: "linear-gradient(135deg,rgb(25, 40, 63),rgb(27, 27, 27))",
    color: "#fff",
    position: "relative",
    overflow: "hidden",// 🔥 Impede que imagens fiquem fora do container
  },
  heroImage: {
    width: "100%",
    maxWidth: "1800px",
    height: "auto",
    objectFit: "cover",
  
  },
  overlayImage: {
    position: "absolute", // 🔥 Sobrepõe a imagem de fundo
    top: "50%", // 🔥 Ajusta para o centro
    left: "50%",
    transform: "translate(-50%, -50%)", // 🔥 Centraliza perfeitamente
    width: "60%", // 🔥 Ajusta o tamanho da sobreposição
    opacity: "0.5", // 🔥 Mantém a transparência
    borderRadius: "20px", // 🔥 Borda arredondada
  },
  textContainer: {
    position: "absolute",
    top: "70%", // 🔥 Ajusta a posição para não cobrir a imagem
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(0, 0, 0, 0.6)",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "700px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.4rem",
    opacity: 0.9,
  },
  servicesText: {
    fontSize: "1rem",
    opacity: 0.7,
  },
  button: {
    marginTop: "15px",
    padding: "12px 24px",
    background: "linear-gradient(135deg,rgb(25, 40, 63),rgb(109, 108, 108))",
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.2rem",
    borderRadius: "8px",
    transition: "transform 0.3s, box-shadow 0.3s",
    boxShadow: "0px 4px 10px rgba(255, 152, 0, 0.4)",
    cursor: "pointer",
  },

  /* 🔥 Estilos responsivos */
  "@media (max-width: 768px)": {
    textContainer: {
      top: "60%", // 🔥 Ajusta posição no mobile
      width: "90%",
    },
    overlayImage: {
      width: "70%", // 🔥 Imagem menor em telas pequenas
    },
  },

  "@media (min-width: 1600px)": {
    container: {
      padding: "8vh 10vw", // 🔥 Ajusta espaçamento em telas grandes
    },
    textContainer: {
      top: "75%",
    },
  },
};

export default Hero;
