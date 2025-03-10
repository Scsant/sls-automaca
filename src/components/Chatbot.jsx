import React, { useState, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import IAImage from "../assets/ia.jpg";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Olá! 👋 Sou seu assistente virtual. Como posso ajudar?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("https://sls-automaca-aqaaq0wak-socrates-luiz-dos-santos-projects.vercel.app/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages([...newMessages, { text: data.reply, sender: "bot" }]);
    } catch (error) {
      setMessages([...newMessages, { text: "Erro ao conectar à IA!", sender: "bot" }]);
    }
  };

  return (
    <>
      {/* Botão flutuante */}
      <button 
        onClick={toggleChat} 
        style={styles.floatingButton} 
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      ></button>


      {/* Chatbox */}
      {isOpen && (
        <div style={styles.chatContainer}>
          <div style={styles.chatHeader}>🤖 Assistente Virtual</div>
          <div style={styles.chatBody}>
            {messages.map((msg, index) => (
              <div key={index} style={msg.sender === "user" ? styles.userMessage : styles.botMessage}>
                {msg.text}
              </div>
            ))}
          </div>
          <div style={styles.chatFooter}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua pergunta..."
              style={styles.input}
            />
            <button onClick={sendMessage} style={styles.sendButton}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  floatingButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "120px", // 🔥 Ajuste conforme necessário
    height: "50px",
    backgroundImage: `url(${IAImage})`, // 🔥 Caminho da imagem
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    border: "none",
    borderRadius: "30px", // 🔥 Formato pílula
    cursor: "pointer",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    transition: "0.3s ease-in-out",
    },

    floatingButtonHover: {
    transform: "scale(1.05)", // 🔥 Aumenta um pouco ao passar o mouse
    },
    

  chatContainer: {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "320px",
    background: "linear-gradient(135deg,rgba(84, 95, 160, 0.89), #2a2a2a)",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    animation: "fadeIn 0.3s ease-in-out",
  },

  chatHeader: {
    background: "linear-gradient(135deg,rgba(84, 95, 160, 0.89), #2a2a2a)",
    padding: "12px",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.2rem",
  },

  chatBody: {
    padding: "12px",
    maxHeight: "300px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    background: "#2a2a2a",
  },

  userMessage: {
    alignSelf: "flex-end",
    background: "#444",
    padding: "8px",
    borderRadius: "5px",
    margin: "5px 0",
    color: "#fff",
    maxWidth: "80%",
  },

  botMessage: {
    alignSelf: "flex-start",
    background: "#333",
    padding: "8px",
    borderRadius: "5px",
    margin: "5px 0",
    color: "#ff9800",
    maxWidth: "80%",
  },

  chatFooter: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #333",
  },

  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    marginRight: "5px",
    fontSize: "1rem",
    outline: "none",
  },

  sendButton: {
    background: "#ff9800",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "10px",
    color: "#fff",
    fontSize: "1rem",
    transition: "0.3s",
  },
};

export default Chatbot;
