import React, { useState } from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../assets/post_automacao.jpg"; 
import { useNavigate } from "react-router-dom"; 

const services = [
  { id: 1, title: "Automação de Processos", description: "Elimine tarefas repetitivas com nossos bots." },
  { id: 2, title: "Dashboards Interativos", description: "Transforme seus dados em decisões." },
  { id: 3, title: "Integrações de Sistemas", description: "Conectamos diferentes plataformas para você." },
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  // ✅ Adicionamos esta variável ANTES do return!
  const serviceRoutes = {
    1: "/automacao-processos",
    2: "/dashboards-interativos",
    3: "/integracoes-sistemas", // 🔥 Página ainda será criada
  };

  return (
    <section id="services" style={styles.container}>
      <div style={{ ...styles.backgroundOverlay, backgroundImage: `url(${BackgroundImage})` }}></div>

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
            onClick={() => navigate(serviceRoutes[service.id])} // ✅ Agora funciona sem erro!
          >
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.cardText}>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const styles = {
  container: {
    position: "relative",
    padding: "10vh 5vw",
    textAlign: "center",
    color: "#fff",
    overflow: "hidden",
    opacity: "1",
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.5, // 🔥 Mantém a imagem discreta
    zIndex: -1, // 🔥 Mantém a imagem atrás do conteúdo
  },
  title: {
    fontSize: "clamp(2rem, 4vw, 3rem)", // 🔥 Tamanho responsivo
    marginBottom: "30px",
    textShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // 🔥 Ajusta para qualquer tamanho de tela
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    transition: "transform 0.3s, box-shadow 0.3s",
    background: "linear-gradient(135deg, #222, #2a2a2a)",
    padding: "20px",
    borderRadius: "50px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
    cursor: "pointer",
    textAlign: "center",
    position: "relative",
    width: "clamp(280px, 30vw, 350px)", // 🔥 Cards responsivos
    minHeight: "180px",
  },
  cardHover: {
    transform: "scale(1.07)",
    boxShadow: "0px 10px 25px rgba(255, 152, 0, 0.8)",
  },
  cardTitle: {
    fontSize: "clamp(1.2rem, 2vw, 1.5rem)", // 🔥 Ajustável
    fontWeight: "bold",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", // 🔥 Escalável
    opacity: 0.6,
  },
};

export default Services;
