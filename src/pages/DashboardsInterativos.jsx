import React from "react";
import { useNavigate } from "react-router-dom"; // 🔥 Para navegação

const DashboardsInterativos = () => {
  const navigate = useNavigate(); // Hook para voltar

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📊 Dashboards Interativos</h2>
      <p style={styles.subtitle}>Transforme seus dados em insights poderosos.</p>

      {/* 🔥 Botão de voltar */}
      <button style={styles.backButton} onClick={() => navigate("/")}>
        ⬅ Voltar para Home
      </button>

      <div style={styles.iframeWrapper}>
        <iframe
          title="Figma Prototype"
          style={styles.iframe}
          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/twGhUNUrWHgloQaaJDI0aA/Untitled?node-id=64-8&scaling=min-zoom&hide-ui=1"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "50px 10%",
    textAlign: "center",
    background: "#111", // 🔥 Fundo escuro para destacar os dashboards
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "10px",
    marginTop: "20px"
  },
  subtitle: {
    fontSize: "1.2rem",
    opacity: 0.8,
    marginBottom: "20px",
  },
  backButton: {
    position: "fixed", // 🔥 Agora o botão fica fixo no topo
    top: "20px",
    left: "20px",
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    background: "linear-gradient(135deg,rgb(25, 40, 63),rgb(109, 108, 108))",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
    zIndex: 1000, // 🔥 Mantém o botão acima do conteúdo
  },
  iframeWrapper: {
    width: "99%",
    maxWidth: "1400px", // 🔥 Aumentado para melhor visualização
    aspectRatio: "16 / 9", // 🔥 Mantém a proporção correta
    
    borderRadius: "10px",
    boxShadow: "0px 4px 15px rgba(255, 152, 0, 0.4)",
    height: "120vh", 
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
  },
};

export default DashboardsInterativos;
