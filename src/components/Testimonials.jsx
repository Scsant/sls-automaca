import React, { useState } from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../assets/post_automacao.jpg"; // 🔥 Adicionando a imagem de fundo

const testimonials = [
  { id: 1, name: "Carlos Silva", feedback: "Automação reduziu nosso tempo de trabalho em 80%!" },
  { id: 2, name: "Ana Oliveira", feedback: "Dashboards incríveis, ajudaram nossa equipe comercial!" },
  { id: 3, name: "Lucas Pereira", feedback: "A integração com o SAP foi um divisor de águas." },
];

const Testimonials = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="testimonials" style={styles.container}>
      {/* 🔥 Imagem de Fundo */}
      <div style={styles.backgroundOverlay}></div>

      <h2 style={styles.title}>💬 O que nossos clientes dizem</h2>
      <motion.div
        style={styles.grid}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {testimonials.map((item) => (
          <motion.div
            key={item.id}
            style={{
              ...styles.card,
              ...(hoveredCard === item.id ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 10px 25px rgba(255, 152, 0, 0.7)",
            }}
            transition={{ duration: 0.3 }}
          >
            <p style={styles.feedback}>"{item.feedback}"</p>
            <p style={styles.author}>- {item.name}</p>
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
    backgroundImage: `url(${BackgroundImage})`, // 🔥 Imagem de fundo adicionada
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.2, // 🔥 Mantém a imagem sutil para não atrapalhar a leitura
    zIndex: -1,
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "30px",
    textShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    background: "rgba(34, 34, 34, 0.9)", // 🔥 Fundo semi-transparente para contraste
    padding: "20px",
    borderRadius: "50px",
    width: "280px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },
  cardHover: {
    transform: "scale(1.07)",
    boxShadow: "0px 10px 25px rgba(255, 152, 0, 0.7)",
  },
  feedback: {
    fontSize: "16px",
    fontStyle: "italic",
    marginBottom: "10px",
  },
  author: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#ff9800",
  },
};

export default Testimonials;
