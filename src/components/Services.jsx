import React, { useState } from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../assets/post_automacao.jpg"; // 🔥 Imagem de fundo adicionada

const services = [
  { id: 1, title: "Automação de Processos", description: "Elimine tarefas repetitivas com nossos bots." },
  { id: 2, title: "Dashboards Interativos", description: "Transforme seus dados em decisões." },
  { id: 3, title: "Integrações de Sistemas", description: "Conectamos diferentes plataformas para você." },
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="services" style={styles.container}>
      {/* 🔥 Imagem de Fundo */}
      <div style={styles.backgroundOverlay}></div>

      <h2 style={styles.title}>⚙️ Nossos Serviços</h2>
      <motion.div
        style={styles.grid}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            style={{
              ...styles.card,
              ...(hoveredCard === service.id ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 10px 25px rgba(255, 152, 0, 0.7)",
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.cardText}>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const styles = {
  container: {
    position: "relative",
    padding: "80px 20px",
    textAlign: "center",
    color: "#fff",
    overflow: "hidden",
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${BackgroundImage})`, // 🔥 Adiciona a imagem de fundo
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.5, // 🔥 Torna a imagem sutil para não interferir na leitura
    zIndex: -1, // 🔥 Mantém a imagem atrás de tudo
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "30px",
    textShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    transition: "transform 0.3s, box-shadow 0.3s",
    background: "linear-gradient(135deg, #222, #2a2a2a)",
    padding: "25px",
    borderRadius: "20px",
    width: "320px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
    cursor: "pointer",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  cardHover: {
    transform: "scale(1.07)",
    boxShadow: "0px 10px 25px rgba(255, 152, 0, 0.8)",
  },
  cardTitle: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "1rem",
    opacity: 0.8,
  },
};

export default Services;
