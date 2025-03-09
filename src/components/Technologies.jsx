import React from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../assets/post_automacao.jpg"; // 🔥 Imagem de fundo adicionada


const techLogos = [
    { id: 1, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { id: 2, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { id: 3, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { id: 4, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
    { id: 5, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
    { id: 6, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", alt: "Django" },
    { id: 7, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", alt: "Flask" },
    { id: 8, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", alt: "Angular" },
    { id: 10, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", alt: "SQL Server" },
    { id: 11, src: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg", alt: "SAP" },
    { id: 12, src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", alt: "Power BI" },
    { id: 13, src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg", alt: "R" },
    { id: 14, src: "https://policyviz.com/wp-content/uploads/2016/10/Excel-VBA.jpg", alt: "VBA" },
    { id: 15, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rjrYza0aqzTX832wl9Ww3Hb2Iz3ZR_Vl9Q&s", alt: "Streamlit" },
    { id: 16, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
    { id: 17, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
    { id: 19, src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", alt: "AWS" },
    { id: 20, src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg", alt: "Google Cloud" },
    

    
];
const Technologies = () => {
  return (
    <section style={styles.container}>
      {/* 🔥 Imagem de Fundo */}
      <div style={styles.backgroundOverlay}></div>

      {/* 🔥 Slider de Logos com Animação Infinita */}
      <motion.div
        style={styles.slider}
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {[...techLogos, ...techLogos].map((tech, index) => (
          <motion.div
            key={index}
            style={styles.card}
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={tech.src} alt={tech.alt} style={styles.logo} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const styles = {
  container: {
    padding: "90px 20px",
    textAlign: "center",
    overflow: "hidden",
    position: "relative",
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
    opacity: 0.6, // 🔥 Deixa a imagem semi-transparente para não atrapalhar os ícones
    zIndex: -1, // 🔥 Mantém a imagem atrás de tudo
  },
  slider: {
    display: "flex",
    gap: "40px",
    whiteSpace: "nowrap",
    width: "200%",
  },
  card: {
    width: "100px",
    height: "100px",
    borderRadius: "15px",
    backgroundColor: "#111",
    border: "4px solid transparent",
    backgroundImage: "linear-gradient(#111, #111), linear-gradient(135deg, #ff9800, #4caf50, #2196f3, #ff5722)",
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box",
    transition: "0.4s ease-in-out",
  },
  logo: {
    width: "70px",
    height: "70px",
    padding: "10px",
    objectFit: "contain",
    filter: "drop-shadow(0px 4px 8px rgba(255,255,255,0.3))",
  },
};


// Adicionando a Keyframe para o fundo suave via JS
const globalStyles = `
  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const styleElement = document.createElement("style");
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(globalStyles));
document.head.appendChild(styleElement);

export default Technologies;