import React, { useState } from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../assets/automacao2.jpg"; // Imagem de fundo

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError("Todos os campos são obrigatórios.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Insira um e-mail válido.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setError("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = "5511999999999";
    const message = `Olá, meu nome é ${formData.name}. Estou interessado em automações! Minha mensagem: ${formData.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contato" style={styles.container}>
      {/* 🔥 Imagem de fundo */}
      <div style={styles.backgroundOverlay}></div>

      <motion.div
        style={styles.formContainer}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.title}>📞 Solicitar Orçamento</h2>
        <motion.form style={styles.form} onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder="Seu Nome"
            required
            style={styles.input}
            value={formData.name}
            onChange={handleChange}
            whileFocus={{ scale: 1.05, borderColor: "#ff9800" }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Seu E-mail"
            required
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
            whileFocus={{ scale: 1.05, borderColor: "#ff9800" }}
          />
          <motion.textarea
            name="message"
            placeholder="Descreva sua necessidade..."
            required
            style={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            whileFocus={{ scale: 1.05, borderColor: "#ff9800" }}
          />
          {error && <p style={styles.error}>{error}</p>}
          <motion.div style={styles.buttons}>
            <motion.button type="submit" style={styles.button} whileHover={{ scale: 1.1 }}>
              Enviar Solicitação
            </motion.button>
            <motion.button type="button" style={styles.whatsappButton} onClick={handleWhatsApp} whileHover={{ scale: 1.1 }}>
              📲 Solicitar pelo WhatsApp
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>

      {/* Modal de Sucesso */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.successModal}
        >
          ✅ Solicitação enviada com sucesso!
        </motion.div>
      )}
    </section>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.3)", // 🔥 Deixa a imagem mais escura
    zIndex: -1,
  },
  formContainer: {
    position: "relative",
    background: "rgba(20, 20, 20, 0.85)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(10px)",
    maxWidth: "500px",
    width: "90%",
    zIndex: 1,
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
    textShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "2px solid transparent",
    fontSize: "16px",
    transition: "border-color 0.3s, transform 0.3s",
  },
  textarea: {
    width: "100%",
    height: "120px",
    padding: "12px",
    borderRadius: "10px",
    border: "2px solid transparent",
    fontSize: "16px",
    transition: "border-color 0.3s, transform 0.3s",
  },
  error: {
    color: "#ff4d4d",
    fontSize: "14px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
    marginTop: "15px",
    width: "100%",
  },
  button: {
    padding: "12px 25px",
    background: "linear-gradient(135deg,rgb(25, 40, 63),rgb(109, 108, 108))",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
  whatsappButton: {
    padding: "12px 25px",
    background: "#25D366",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
  successModal: {
    padding: "15px",
    background: "#4CAF50",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "20px",
    borderRadius: "10px",
  },
};

export default Contact;
