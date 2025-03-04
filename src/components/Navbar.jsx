import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta scroll para mudar o fundo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para scroll suave ao clicar
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <nav style={{ ...styles.navbar, ...(isScrolled ? styles.navbarScrolled : {}) }}>
      <div style={styles.logo}>🚀 SLS</div>
      <ul style={styles.navLinks}>
        {["hero", "services", "projects", "testimonials", "contato"].map((section) => (
          <li
            key={section}
            style={{
              ...styles.navItem,
              ...(activeSection === section ? styles.activeNavItem : {}),
            }}
            onClick={() => handleScroll(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(20, 19, 19, 0.6)",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
    transition: "background-color 0.3s ease-in-out",
    color: "#fff",
  },
  navbarScrolled: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.5)",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    fontSize: "1.1rem",
  },
  navItem: {
    cursor: "pointer",
    transition: "color 0.3s",
    color: "#ccc",
  },
  activeNavItem: {
    color: "#ff9800",
    fontWeight: "bold",
    textShadow: "0px 0px 10px rgba(255,152,0,0.8)",
  },
};

export default Navbar;
