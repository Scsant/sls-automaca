import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "../projectsData";

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="projects" style={styles.container}>
   
      <div style={styles.grid}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            style={{
              ...styles.card,
              ...(hoveredCard === project.id ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
            initial={{ opacity: 0, y: 50 }}  // 🔥 Começa invisível e deslocado para baixo
            whileInView={{ opacity: 1, y: 0 }}  // 🔥 Suavemente sobe ao aparecer
            transition={{ duration: 0.5 }}  // 🔥 Velocidade da animação
          >
            <img src={project.image} alt={project.title} style={styles.image} />
            <div style={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div style={styles.techs}>
                {project.techs.map((tech, index) => (
                  <span key={index} style={styles.tech}>{tech}</span>
                ))}
              </div>
              <a href={project.link} style={styles.button} target="_blank" rel="noopener noreferrer">
                Ver mais
              </a>
            </div>
          </motion.div> 
        ))}  
      </div>  {/* 🔥 Fechamento correto da div "grid" */}
    </section>  // 🔥 Fechamento correto do <section>
  );
};

const styles = {
  container: {
    width: "100vw",
    padding: "50px 20px",
    background: "linear-gradient(135deg,rgb(25, 40, 63), #1e1e1e)",
    textAlign: "center",
    color: "#fff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "20px",
    width: "90%",
    margin: "0 auto",
  },
  card: {
    background: "#222",
    borderRadius: "50px",
    overflow: "hidden",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    cursor: "pointer",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
    textAlign: "center",
    position: "relative",
  },
  cardHover: {
    transform: "scale(1.07)",  // 🔥 Cresce um pouco mais para dar destaque
    boxShadow: "0px 10px 25px rgba(255, 152, 0, 0.7)",  // 🔥 Brilho mais suave
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  content: {
    padding: "15px",
  },
  techs: {
    display: "flex",
    justifyContent: "center", // 🔥 Centraliza os botões dentro do card
    alignItems: "center",
    flexWrap: "wrap", // 🔥 Permite que os botões quebrem de linha se necessário
    gap: "10px",
    marginTop: "10px",
  },
  tech: {
    background: "linear-gradient(135deg,rgb(25, 40, 63),rgb(61, 60, 60))",
    color: "#fff",
    padding: "5px 15px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "80px", // 🔥 Garante que os botões tenham um tamanho mínimo para ficarem uniformes
    textAlign: "center",
  },
  button: {
    display: "block",
    marginTop: "15px",
    padding: "10px",
    background: "linear-gradient(135deg,rgb(25, 40, 63),rgb(109, 108, 108))",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "50px",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default Projects;
